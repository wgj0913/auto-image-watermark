import { IConfig } from '../models/interface';
import { configToData } from './utils';
import { createCanvas, draw } from './canvas';
import { drawBlock,drawCirleBlock } from './block';
import { drawText } from './text';
import { drawLine } from './line';
import { drawImage, drawCirleImage } from './image';

// export * from './libs/canvas';

export function create(config: IConfig) {
  const { width, height, backgroundColor = '#fff', debug, pixelRatio, blocks, texts, images, lines } = config;
  return new Promise(async (resolve, reject) => {
    const data = configToData(config);
    createCanvas(width, height, backgroundColor);

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      if (item.type === 'blocks') {
        drawCirleBlock(item);
      } else if (item.type === 'texts') {
        drawText(item, false);
      } else if (item.type === 'lines') {
        drawLine(item);
      } else if (item.type === 'images') {
        await drawCirleImage(item);
      }
    }

    const base64 = draw(width, height);
    return resolve(base64);
  });
}
