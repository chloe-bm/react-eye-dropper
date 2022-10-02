import React from "react";
import html2canvas from "html2canvas";
import { getCopyStyleCursor } from "./cursor";
import { getCanvasPixelColor } from "./utils";

function useEyeDropper() {
  const [color, setColor] = React.useState("#000000");

  const onEyeDrop = React.useCallback(async (e: MouseEvent) => {
    const canvas = await html2canvas(document.body, { logging: false });
    const { clientX: x, clientY: y } = e;
    const { r, g, b, a } = getCanvasPixelColor(canvas, x, y);
    const color = `rgba(${r},${g},${b},${a})`;
    setColor(color);
    document.removeEventListener("click", onEyeDrop);
    document.body.style.cursor = "default";
  }, []);

  const onInit = React.useCallback(() => {
    document.body.style.cursor = getCopyStyleCursor();
    setTimeout(() => {
      document.addEventListener("click", onEyeDrop);
    }, 1);
  }, []);

  return {
    onInit,
    color,
  };
}

export default useEyeDropper;
