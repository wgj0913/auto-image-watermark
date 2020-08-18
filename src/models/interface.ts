export interface ITexts {
  x: number;
  y: number;
  text: string;
  fontSize: number;
  color?: string;
  opacity?: number;
  lineHeight?: number;
  lineNum?: number;
  width?: number;
  marginLeft?: number;
  marginRight?: number;
  textDecoration?: string;
  baseLine?: string;
  textAlign?: string;
  zIndex?: number;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  type?: string;
  autoLines?: boolean;
}

export interface IBlocks {
  x: number;
  y: number;
  height: number;
  width: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  text?: { text: ITexts[] };
  zIndex?: number;
  type?: string;
}

export interface IImages {
  x: number;
  y: number;
  url: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: number;
  zIndex?: number;
  type?: string;
}

export interface ILines {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  width: number;
  color?: string;
  zIndex?: number;
  type?: string;
}

export interface IConfig {
  width: number;
  height: number;
  backgroundColor?: string;
  debug?: boolean;
  pixelRatio?: number;
  preload?: boolean;
  hideLoading?: boolean;
  blocks?: IBlocks[];
  texts?: ITexts[];
  images?: IImages[];
  lines?: ILines[];
}
