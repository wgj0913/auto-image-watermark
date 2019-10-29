import { IConfig } from '../models/interface';

/**
 * 颜色名转rgb
 * @param color red => rgb(255,0,0)
 */
export const color2Rgb = (color: string) => {
  const d = document.createElement('div');

  d.style.color = color;

  document.body.appendChild(d);
  const result = window.getComputedStyle(d).color;
  document.body.removeChild(d);
  return result;
};

/**
 * 数组根据zIndex排序
 * @param data
 */
export const mutiSort = (data: any[]) => {
  data.sort((a: any, b: any) => {
    return a.zIndex - b.zIndex;
  });
};

/**
 * 十六进制转为RGB
 * @param hex
 */
export const hex2Rgb = (hex: any) => {
  const rgb: any[] = []; // 定义rgb数组

  // 判断传入是否为#三位十六进制数
  if (/^\#[0-9A-F]{3}$/i.test(hex)) {
    let sixHex = '#';
    hex.replace(/[0-9A-F]/gi, function(kw: any) {
      sixHex += kw + kw; // 把三位16进制数转化为六位
    });
    hex = sixHex; // 保存回hex
  }

  // 判断传入是否为#六位十六进制数
  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    hex.replace(/[0-9A-F]{2}/gi, function(kw: any) {
      rgb.push(eval('0x' + kw)); // 十六进制转化为十进制并存如数组
    });
    return `rgb(${rgb.join(',')})`; // 输出RGB格式颜色
  } else {
    console.log(`Input ${hex} is wrong!`);
    return 'rgb(0,0,0)';
  }
};

/**
 * RGB转为十六进制
 * @param rgb
 */
export const rgb2Hex = (rgb: any) => {
  if (/^rgb\((\d{1,3}\,){2}\d{1,3}\)$/i.test(rgb)) {
    // test RGB
    let hex = '#'; // 定义十六进制颜色变量
    rgb.replace(/\d{1,3}/g, function(kw: any) {
      // 提取rgb数字
      kw = parseInt(kw, 10).toString(16); // 转为十六进制
      kw = kw.length < 2 ? 0 + kw : kw; // 判断位数，保证两位
      hex += kw; // 拼接
    });
    return hex; // 返回十六进制
  } else {
    console.log(`Input ${rgb} is wrong!`);
    return '#000'; // 输入格式错误,返回#000
  }
};

/**
 * rgb转rgba
 * @param rgb 颜色值
 * @param opacity 透明度
 */
export const rgb2rgba = (rgb: string, opacity: number) => {
  const rgba: any = rgb.split(')');
  return `${rgba[0]},${opacity})`;
};

/**
 * 数据处理
 * @param config
 */
export const configToData = (config: IConfig) => {
  const { blocks = [], texts = [], images = [], lines = [] } = config;

  const temp: any[] = [];
  if (blocks.length > 0) {
    blocks.forEach((i: any) => {
      if (!i.zIndex) {
        i.zIndex = 0;
      }
      const arr = { ...i, type: 'blocks' };
      temp.push(arr);
    });
  }

  if (texts.length > 0) {
    texts.forEach((i: any) => {
      if (!i.zIndex) {
        i.zIndex = 0;
      }
      const arr = { ...i, type: 'texts' };
      temp.push(arr);
    });
  }

  if (images.length > 0) {
    images.forEach((i: any) => {
      if (!i.zIndex) {
        i.zIndex = 0;
      }
      const arr = { ...i, type: 'images' };
      temp.push(arr);
    });
  }

  if (lines.length > 0) {
    lines.forEach((i: any) => {
      if (!i.zIndex) {
        i.zIndex = 0;
      }
      const arr = { ...i, type: 'lines' };
      temp.push(arr);
    });
  }

  mutiSort(temp);
  return temp;
};
