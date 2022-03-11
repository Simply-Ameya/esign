import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import "./index.css";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import WebViewer from "@pdftron/pdfjs-express-viewer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Upload() {
  const [pdfFile, setPdfFile] = useState(null);
  const [uploadedDoc, setUploadedDoc] = useState();
  const [title, setTitle] = useState();

  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const fileType = ["application/pdf"];

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleFileInput = async (e) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile.name.endsWith(".pdf"));
    if (selectedFile.name.endsWith(".pdf")) {
      if (selectedFile) {
        if (selectedFile && fileType.includes(selectedFile.type)) {
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onloadend = (e) => {
            setPdfFile(e.target.result);
          };
        } else {
          setPdfFile(null);
        }
      } else {
        console.log("select your file");
      }
      handleUpload();
    } else {
      toast.error("Not a PDF file. Please verify and re-upload correct one", {
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

  const handleUpload = async () => {
    const url = "http://localhost:3000/document/upload";
    const body = {
      url: pdfFile,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    setUploadedDoc(data);
  };

  const handleNext = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const doc = uploadedDoc;
    console.log(user, doc);
    const url = "http://localhost:3000/sign/upload";
    const body = {
      email: user.email,
      fileId: doc._id,
      signers: [],
      title: title,
      unsignedDocument: doc.url,
      userId: user._id,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (!title) {
      toast.error("Give a title to the document", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (response.ok && title) {
      navigate(`/esign/request/${doc._id}`);
    }
    dispatcher({ type: "UPLOAD", value: data });
  };

  return (
    <>
      <ToastContainer />

      <Popup
        trigger={
          <div>
            <p className="options">
              <BsFillCloudArrowUpFill />
              Upload
            </p>
          </div>
        }
        position="right center"
      >
        <div className="card upload-popup">
          <div>
            <p>Initiate Signing Request</p>
          </div>
          <hr />
          <div>
            <div className="popup-field">
              <p>Document : </p>
              <input
                type="file"
                name="file"
                className="file--input"
                onClick={(e) => {
                  e.target.value = null;
                }}
                onChange={(e) => {
                  handleFileInput(e);
                }}
              />
            </div>
            <div className="popup-field">
              <p>Title : </p>
              <input
                type="text"
                className="title-input"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <hr />
          <div className="pop-buttons-container">
            <button className="btn btn-secondary cancel-button">Cancel</button>
            <button
              className="btn btn-primary next-button"
              onClick={() => {
                handleNext();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}
