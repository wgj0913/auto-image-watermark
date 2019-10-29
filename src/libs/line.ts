import { ILines } from '../models/interface';
import { globalCanvas } from './canvas';
import { mutiSort } from './utils';

/**
 * 绘制线
 * @param lines
 */
export const drawLine = (lines: ILines) => {
  const ctx = globalCanvas.getContext('2d');
  const { startX, startY, endX, endY, width, color, zIndex } = lines;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.closePath();
  ctx.stroke();
};

// 添加线
// export const line = (lines: ILines[]) => {
//   mutiSort(lines);
//   if (!lines[0]) {
//     return;
//   }
//   for (let i = 0; i < lines.length; i++) {
//     drawLine(lines[i]);
//     if (i === lines.length - 1) {
//       console.log('lines');
//       return globalCanvas;
//     }
//   }
// };
