let globalCanvas: any;
let pixelRatio = window.devicePixelRatio;
// canvas初始化
export const createCanvas = (width: number, height: number, backgroundColor: string = '#fff') => {
  globalCanvas = document.createElement('canvas');
  globalCanvas.width = width * pixelRatio;
  globalCanvas.height = height * pixelRatio;
  globalCanvas.style.width = width + 'px';
  globalCanvas.style.height = height + 'px';
  const ctx = globalCanvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width * pixelRatio, height * pixelRatio);
  return globalCanvas;
};

// 转为base64，绘制图片
export const draw = (width: number, height: number) => {
  document.body.append(globalCanvas);
  return globalCanvas.toDataURL();
};

export { globalCanvas, pixelRatio };
