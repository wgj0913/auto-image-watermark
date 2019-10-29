import { ITexts } from '../models/interface';
/**
 * 绘制文字
 * @param texts text内容
 * @param isBlock 是否块内文字
 * @param blockX 块的x
 * @param blockY 块的y
 * @param blockWidth 块的宽
 * @param blockHeight 块的高
 */
export declare const drawText: (texts: ITexts, isBlock: boolean, blockX?: number, blockY?: number, blockWidth?: number, blockHeight?: number) => void;
/**
 * 处理文字
 * @param texts
 * @param textConfig 块的相关参数
 */
export declare const texts: (texts: ITexts[], textConfig: any) => any;
