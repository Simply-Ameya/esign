import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const handleSignin = async () => {
    toastifyError();
    const body = {
      email,
      password,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    };

    const url = "http://localhost:3000/user/login";
    const response = await fetch(url, options);
    const data = await response.json();
    localStorage.setItem("auth-token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    console.log(data);

    if (email !== "" && password !== "" && response.ok) {
      navigate("/esign/documents/all");
    }

    dispatcher({ type: "LOGIN", value: data.user });
  };

  const toastifyError = () => {
    if (email === "") {
      toast.error("Username and password are needed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="d-flex col justify-content-center text-center ">
      <ToastContainer />
      <div className="card card-container ">
        <img
          className="logo-image"
          src="https://esignfor.us/assets/images/logo.png"
        />
        <input
          type="text"
          className="mt-3"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="mt-3"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="mt-3 btn btn-primary"
          onClick={() => {
            handleSignin();
          }}
        >
          Sign in
        </button>
        <p>
          No account?
          <span>
            <Link to="/esign/register">Create One</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
