import { IConfig } from '../models/interface';
/**
 * 颜色名转rgb
 * @param color red => rgb(255,0,0)
 */
export declare const color2Rgb: (color: string) => string | null;
/**
 * 数组根据zIndex排序
 * @param data
 */
export declare const mutiSort: (data: any[]) => void;
/**
 * 十六进制转为RGB
 * @param hex
 */
export declare const hex2Rgb: (hex: any) => string;
/**
 * RGB转为十六进制
 * @param rgb
 */
export declare const rgb2Hex: (rgb: any) => string;
/**
 * rgb转rgba
 * @param rgb 颜色值
 * @param opacity 透明度
 */
export declare const rgb2rgba: (rgb: string, opacity: number) => string;
/**
 * 数据处理
 * @param config
 */
export declare const configToData: (config: IConfig) => any[];
