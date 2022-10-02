import React from "react";
import { getCopyStyleCursor } from "./cursor";
import html2canvas from "html2canvas";
import { getCanvasPixelColor } from "./utils";

const EyeDropper = (props: {
  children: React.ReactNode;
  onChange: (color: string) => void;
}) => {
  const onEyeDrop = React.useCallback(async (e: MouseEvent) => {
    const canvas = await html2canvas(document.body, { logging: false });
    const { clientX: x, clientY: y } = e;
    const { r, g, b, a } = getCanvasPixelColor(canvas, x, y);
    const color = `rgba(${r},${g},${b},${a})`;
    props.onChange(color);
    document.removeEventListener("click", onEyeDrop);
    document.body.style.cursor = "default";
  }, []);

  const onInit = React.useCallback(() => {
    document.body.style.cursor = getCopyStyleCursor();
    setTimeout(() => {
      document.addEventListener("click", onEyeDrop);
    }, 1);
  }, []);

  const RenderChildren = () =>
    React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, { onClick: onInit });
    }) as any;

  return <RenderChildren />;
};

export default EyeDropper;
