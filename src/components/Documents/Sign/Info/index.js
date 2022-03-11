import React, { useEffect, useState } from "react";
import useForceUpdate from "../../../Hooks/useForceUpdate";
import "./index.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

export default function Info() {
  const dispatcher = useDispatch();

  const [numberOfSigners, setNumberOfSigners] = useState([
    { email: "", id: uuid() },
  ]);
  const email = useSelector((state) => state.user.email);
  const forceUpdate = useForceUpdate();

  const addSigner = () => {
    const currentNumber = numberOfSigners;
    currentNumber.push({ email: "", id: uuid() });
    setNumberOfSigners(currentNumber);
    forceUpdate();
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    const currentField = numberOfSigners.filter(
      (each) => each.id === e.target.id
    )[0];
    currentField.email = text;
    forceUpdate();
    console.log(numberOfSigners);
  };

  const addMe = () => {
    const field = numberOfSigners[0];
    field.email = email;
    forceUpdate();
    console.log(numberOfSigners);
  };

  const handleDelete = (e) => {
    const signers = numberOfSigners.filter((each) => each.id !== e);
    setNumberOfSigners(signers);
    forceUpdate();
    console.log(signers);
  };

  const handleNext = () => {
    dispatcher({ type: "PROGRESSINCREASE" });
    dispatcher({ type: "SIGNERS", value: numberOfSigners });
  };

  return (
    <div className="background">
      <div className="info-card">
        <div className="">
          <div>
            <input type="checkbox" id="sequence" />
            <label className="label-text" htmlFor="sequence">
              Maintain signers sequence
            </label>
          </div>

          {numberOfSigners.map((each, index) => {
            return (
              <div key={each.id} className="input-container">
                <input
                  id={each.id}
                  value={each.email}
                  type="text"
                  className="emailfield"
                  placeholder="Type in Email"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                {numberOfSigners.length !== 1 ? (
                  <AiFillDelete
                    className="delete-icon"
                    onClick={() => {
                      handleDelete(each.id);
                    }}
                  />
                ) : (
                  <></>
                )}
              </div>
            );
          })}

          <div className="button-container">
            <button
              className="btn btn-outline-primary m-4"
              onClick={() => {
                addSigner();
              }}
            >
              Signer +
            </button>
            <button
              className="btn btn-outline-primary m-4"
              onClick={() => {
                addMe();
              }}
            >
              Me +
            </button>
            {numberOfSigners[0].email !== "" ? (
              <button
                className="btn btn-outline-success m-4"
                onClick={() => handleNext()}
              >
                {"next ->"}
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
