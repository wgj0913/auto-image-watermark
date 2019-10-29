import { IImages } from '../models/interface';
/**
 * 绘制图片（包括圆角图片））
 * @param images
 */
export declare const drawImage: (images: IImages) => Promise<unknown>;
/**
 * 裁剪圆形图片，位置限制在裁剪区域
 * @param images
 */
export declare const drawCirleImage: (images: IImages) => Promise<unknown>;
