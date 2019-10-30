import { ITexts } from '../models/interface';
import { globalCanvas, pixelRatio } from './canvas';
import { hex2Rgb, rgb2rgba, mutiSort, color2Rgb } from './utils';

/**
 * 处理过长text显示
 * @param ctx
 * @param text
 * @param maxWidth 文字最大宽度
 */
const dealWords = (ctx: any, text: string, maxWidth: number) => {
  const textWidth = ctx.measureText(text).width;
  const radio = text.length / textWidth;
  const dis = textWidth - maxWidth;
  if (dis > 0) {
    text = text.slice(0, text.length - dis * radio) + '...';
  }
  return text;
};

/**
 * 绘制文字
 * @param texts text内容
 * @param isBlock 是否块内文字
 * @param blockX 块的x
 * @param blockY 块的y
 * @param blockWidth 块的宽
 * @param blockHeight 块的高
 */
export const drawText = (texts: ITexts, isBlock: boolean, blockX: number = 0, blockY: number = 0, blockWidth: number = 0, blockHeight: number = 0) => {
  const ctx = globalCanvas.getContext('2d');
  let rgba: any;
  const {
    x,
    y,
    text='',
    fontSize,
    color = '#000',
    opacity = 1,
    lineHeight,
    lineNum,
    width = 9999,
    marginLeft,
    marginRight,
    textDecoration,
    baseLine = 'top',
    textAlign = 'start',
    fontFamily = 'sans-serif',
    fontWeight = 'normal',
    fontStyle = 'normal'
  } = texts;

  // 格式化颜色
  if (color.substring(0, 1) === '#') {
    rgba = rgb2rgba(hex2Rgb(color), opacity);
  } else if (color.substring(0, 4) === 'rgba') {
    rgba = color;
  } else if (color.substring(0, 3) === 'rgb') {
    rgba = rgb2rgba(color, opacity);
  } else {
    rgba = rgb2rgba(color2Rgb(color)!, opacity);
  }

  const dealText = dealWords(ctx, text, width);
  if (isBlock) {
    const textWidth = ctx.measureText(text).width;

    // 判断文字是否在blocks中
    if (x > blockX && x + textWidth < blockX + blockWidth && (y > blockY + fontSize && y + fontSize < blockY + blockHeight)) {
      ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
      ctx.fillStyle = rgba;
      ctx.textBaseline = baseLine;
      ctx.textAlign = textAlign;
      ctx.fillText(dealText, x, y);
    }
  } else {
    ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.fillStyle = rgba;
    ctx.textBaseline = baseLine;
    ctx.textAlign = textAlign;
    ctx.fillText(dealText, x, y);
  }
};

/**
 * 处理文字
 * @param texts
 * @param textConfig 块的相关参数
 */
export const texts = (texts: ITexts[], textConfig: any) => {
  const { isBlock, x, y, width, height } = textConfig;
  if (!texts[0]) {
    return;
  }

  for (let i = 0; i < texts.length; i++) {
    drawText(texts[i], isBlock, x, y, width, height);
    if (i === texts.length - 1) {
      return globalCanvas;
    }
  }
};
