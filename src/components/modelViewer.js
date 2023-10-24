import React from "react";
import "@google/model-viewer";

export const MyModelViewer = () => {
  return (
    <model-viewer
      // className="model-viewer"
      src="../../static/models/DinklageLikenessSculpt.glb"
      alt="the hand"
      // exposure="0.008"
      camera-controls
      touch-action="pan-y"
      ar
      ar-modes="webxr"
      style={{ width: "800px", height: "800px" }}
    ></model-viewer>
  );
};
