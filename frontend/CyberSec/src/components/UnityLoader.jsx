import { useEffect, useRef, useState } from "react";

export default function UnityGame() {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Wait until the React canvas is definitely in the DOM
    const canvas = canvasRef.current;
    if (!canvas) return;

    const script = document.createElement("script");
    script.src = "/unity/Builds.loader.js";
    script.onload = () => {
      if (typeof createUnityInstance !== "function") {
        console.error("Unity loader not found!");
        return;
      }

      createUnityInstance(canvas, {
        dataUrl: "/unity/Builds.data.br",
        frameworkUrl: "/unity/Builds.framework.js.br",
        codeUrl: "/unity/Builds.wasm.br",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "YourCompany",
        productName: "CyberSmart",
        productVersion: "1.0",
      }, (progress) => setProgress(progress))
        .then(() => setProgress(1))
        .catch((err) => {
          console.error("Unity load error:", err);
        });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      {progress < 1 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          Loading... {Math.round(progress * 100)}%
        </div>
      )}
      <canvas
        ref={canvasRef}
        id="unity-canvas" // 👈 this is important!
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
