import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Info from "./Info";
import PrepareFiles from "./PrepareFiles";
import Progress from "./Progress";

export default function Sign() {
  const currentStep = useSelector((state) => state.progress);
  const id = useParams();
  console.log(id);
  return (
    <div>
      <Progress />
      <hr />
      {currentStep === 0 ? <Info /> : <></>}
      {currentStep === 1 ? <PrepareFiles /> : <></>}
    </div>
  );
}
