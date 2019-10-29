import { IBlocks } from '../models/interface';
import { globalCanvas } from './canvas';
import { mutiSort } from './utils';
import { drawText, texts } from './text';

/**
 * 封装的一个用于绘制圆角矩形的函数
 * @param blocks
 */
export const drawBlock = (blocks: IBlocks) => {
  const ctx = globalCanvas.getContext('2d');
  const { x, y, width, height, borderWidth, borderColor, borderRadius: radius = 0, backgroundColor, text = '' } = blocks;

  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
  ctx.lineTo(x + width - radius, y + height);
  ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
  ctx.lineTo(x + width, y + radius);
  ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
  ctx.lineTo(x + radius, y);
  ctx.quadraticCurveTo(x, y, x, y + radius);
  ctx.lineWidth = borderWidth;
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = backgroundColor || undefined; // rgba(ff,ff,ff,opacity)
  ctx.stroke();
  ctx.fill();
  if (text !== '') {
    texts(text.text, { isBlock: true, x, y, width, height });
  }
};

// 添加块
// export const block = (blocks: IBlocks[]) => {
//   mutiSort(blocks);
//   if (!blocks[0]) {
//     return;
//   }
//   for (let i = 0; i < blocks.length; i++) {
//     // const { width, height } = blocks[i];
//     // const canvas = create(200, 200);
//     // const ctx = canvas.getContext('2d');
//     // await roundedRect(blocks[i]);
//     // console.log(canvas.toDataURL());
//     drawBlock(blocks[i]);
//     if (i === blocks.length - 1) {
//       console.log('blocks');
//       return globalCanvas;
//     }
//   }
// };
