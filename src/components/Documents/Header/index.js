import React from "react";
import "./index.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <img
          src="https://esignfor.us/assets/images/logo.png"
          className="logo-image"
        />
        <div>
          <p className="user">
            <BsFillPersonFill />
            <span>Ameya</span>
          </p>
          <p
            onClick={() => {
              localStorage.clear();
              navigate("/esign/login");
            }}
          >
            Logout
          </p>
        </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
}
