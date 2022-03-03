import React, { useState } from "react";
import "./index.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
      <div className="text-center">
        <img
          src="https://esignfor.us/assets/images/logo.png"
          className="logo-image"
        />
      </div>
      <div className="text-center d-flex justify-content-center">
        <div className="card text-center w-50">
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Name</p>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Email</p>
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Password</p>
            <input type="text" />
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Confirm Password</p>
            <input type="text" />
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Phone</p>
            <input type="text" />
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Gender</p>
            <input id="male" type="radio" value="Male" name="gender" />
            <label htmlFor="male">Male</label>
            <input id="female" type="radio" value="Female" name="gender" />
            <label htmlFor="female">Female</label>
            <input id="other" type="radio" value="Other" name="gender" />
            <label htmlFor="other">Other</label>
          </div>
          <div>
            <button className="btn btn-primary">Register</button>
          </div>
          <p>
            Already have an account?
            <span>
              <a href="#">Sign in</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
