import React from "react";
import { useSelector } from "react-redux";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import WebViewer from "@pdftron/pdfjs-express-viewer";
import "./index.css";


export default function PrepareFiles() {
  const pdfFile = useSelector((state) => state.document.unsignedDocument);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const canvasViewer = () => {
  pdfjsLib.getDocument()
}

  return (
    <div>
      {pdfFile && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      )}
      <canvas id="my_canvas"></canvas>
      <div className="button-container">
        <button className="btn btn-success">Next</button>
      </div>
    </div>
  );
}
