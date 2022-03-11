import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [errorName, setNameError] = useState(false);
  const [errorEmail, setEmailError] = useState(false);
  const [errorPassword, setPasswordError] = useState(false);
  const [errorConfirm, setConfirmError] = useState(false);
  const [errorPhone, setPhoneError] = useState(false);
  const [errorGender, setGenderError] = useState(false);

  const handleSubmit = async () => {
    toasterror();
    const body = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      gender: gender,
    };
    console.log(body);
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    };
    const url = "http://localhost:3000/user/register";
    const response = await fetch(url, options);
  };

  const toasterror = () => {
    if (name === "") {
      toast.error("Name is needed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setNameError(true);
    } else {
      if (email === "") {
        toast.error("Email is needed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEmailError(true);
      } else {
        if (password === "") {
          toast.error("Password is needed", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setPasswordError(true);
        } else {
          if (confirm === "") {
            toast.error("Confirm Password is needed", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setConfirm(true);
          } else {
            if (phone === "") {
              toast.error("Phone is needed", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setPhoneError(true);
            } else {
              if (gender === "") {
                toast.error("Gender is needed", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                setGender(true);
              }
            }
          }
        }
      }
    }
  };

  return (
    <>
      <div className="text-center">
        <img
          src="https://esignfor.us/assets/images/logo.png"
          className="logo-image"
        />
      </div>
      <ToastContainer />
      <div className="text-center d-flex justify-content-center ">
        <div className="card text-center w-40">
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Name</p>
            <div className="field">
              <input
                id="name"
                className={errorName ? "error" : ""}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {errorName ? (
                <label className="errorMessage">Name is required</label>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Email</p>
            <div className="field">
              <input
                className={errorName || errorEmail ? "error" : ""}
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errorEmail ? (
                <label className="errorMessage">Email is required</label>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Password</p>
            <div className="field">
              <input
                className={
                  errorName || errorEmail || errorPassword ? "error" : ""
                }
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errorPassword ? (
                <label className="errorMessage">Password is required</label>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Confirm Password</p>
            <div className="field">
              <input
                className={
                  errorName || errorEmail || errorPassword || errorConfirm
                    ? "error"
                    : ""
                }
                type="password"
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
              />
              {errorConfirm ? (
                <label className="errorMessage">
                  Confirm Password is required
                </label>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Phone</p>
            <div>
              <input
                className={
                  errorName ||
                  errorEmail ||
                  errorPassword ||
                  errorConfirm ||
                  errorPhone
                    ? "error"
                    : ""
                }
                type="text"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {errorConfirm ? (
                <label className="errorMessage">Phone is required</label>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="card-body d-flex justify-content-between">
            <p className="card-title">Gender</p>
            <input
              id="male"
              type="radio"
              value="Male"
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="male">Male</label>
            <input
              id="female"
              type="radio"
              value="Female"
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="female">Female</label>
            <input
              id="other"
              type="radio"
              value="Other"
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="other">Other</label>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Register
            </button>
          </div>
          <p>
            Already have an account?
            <span>
              <Link to="/esign/login">Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
