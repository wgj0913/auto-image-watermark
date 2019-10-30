let globalCanvas: HTMLCanvasElement & Node & any;
let pixelRatio = globalThis.devicePixelRatio;
// canvas初始化
export const createCanvas = (width: number, height: number, backgroundColor: string = '#fff') => {
  globalCanvas = document.createElement('canvas');
  globalCanvas.width = width;
  globalCanvas.height = height;
  globalCanvas.style.width = width / pixelRatio + 'px';
  globalCanvas.style.height = height / pixelRatio + 'px';
  const ctx = globalCanvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  return globalCanvas;
};

// 转为base64，绘制图片
export const draw = (width: number, height: number) => {
  document.body.append(globalCanvas);
  return globalCanvas.toDataURL();
};

export { globalCanvas, pixelRatio };
