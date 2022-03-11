import React, { useState } from "react";
import { AiTwotoneFolderOpen } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoDocumentTextSharp } from "react-icons/io5";
import "./index.css";
import Upload from "./Upload";

export default function Navbar() {
  

  return (
    <div className="main-container">
      <div>
        <p className="options">
          <AiTwotoneFolderOpen />
          Documents
        </p>
      </div>
      <Upload />
      <div>
        <p className="options">
          <FaFileSignature />
          Requests
        </p>
      </div>
      <div>
        <p className="options">
          <RiDeleteBin6Fill />
          Archived
        </p>
      </div>
      <div>
        <p className="options template-option">
          <IoDocumentTextSharp />
          Templates
        </p>
      </div>
    </div>
  );
}
