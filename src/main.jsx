import React from "react";
import ReactDOM from "react-dom/client";
import { useGLTF, useTexture } from "@react-three/drei";
import App from "./App.jsx";

import "./index.css";

useGLTF.preload("/models/model.glb");
useGLTF.preload("/nametag/kartu.glb");
useTexture.preload("/nametag/band.jpg");
useTexture.preload("/nametag/glbtexture.png");
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
