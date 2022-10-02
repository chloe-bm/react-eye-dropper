export const getCanvasPixelColor = (
  canvasElement: HTMLCanvasElement,
  x: number,
  y: number
) => {
  let ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;

  let pixel: any = ctx.getImageData(x, y, 1, 1).data;

  pixel.r = pixel[0];
  pixel.g = pixel[1];
  pixel.b = pixel[2];
  pixel.a = pixel[3];

  const color = {
    r: pixel[0],
    g: pixel[1],
    b: pixel[2],
    a: pixel[3],
  };

  return color;
};
