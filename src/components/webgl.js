import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const WebGLRenderer = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./Sample/Build/Builds.loader.js",
    dataUrl: "./Sample/Build/webgl.data",
    frameworkUrl: "./Sample/Build/build.framework.js",
    codeUrl: "./Sample/Build/build.wasm"
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: 400, height: 600 }} />
  );
};
