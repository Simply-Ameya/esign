import React, { useState } from "react";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { GiSouthAfricaFlag } from "react-icons/gi";
import { FaStarOfLife } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import "./index.css";
import { useSelector } from "react-redux";

export default function Progress() {
  const currentStep = useSelector((state) => state.progress);
  const progressArray = [
    "Recepients Info",
    "PrepareFiles",
    "Terms & Conditions",
    "Notify & Finish",
  ];
  return (
    <div className="progress-container">
      <img
        src="https://uat.esignfor.us/assets/images/logo.png"
        className="logo-image"
      />
      <div className="progress-options">
        {progressArray.map((each) => {
          return (
            <p
              className={
                currentStep === progressArray.indexOf(each)
                  ? "current each-option"
                  : "each-option"
              }
              key={each}
            >
              {each === "Recepients Info" ? <IoPeopleCircleOutline /> : <></>}
              {each === "PrepareFiles" ? <GiSouthAfricaFlag /> : <></>}
              {each === "Terms & Conditions" ? <FaStarOfLife /> : <></>}
              {each === "Notify & Finish" ? <TiTickOutline /> : <></>}
              {each}
            </p>
          );
        })}
      </div>
    </div>
  );
}
