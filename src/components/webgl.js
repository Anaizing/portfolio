import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const WebGLRenderer = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./Build/Proto-Lab/portfolio-scenes.loader.js",
    dataUrl: "./Build/Proto-Lab/webgl.data",
    frameworkUrl: "./Build/Proto-Lab/build.framework.js",
    codeUrl: "./Build/Proto-Lab/build.wasm"
  });

  return (
    <Unity
      id="react-unity-webgl-canvas-1"
      unityProvider={unityProvider}
      style={{ width: "100vw", padding: 0 }}
    />
  );
};
