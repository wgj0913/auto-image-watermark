# 海报生成 H5 端 SDK

## 安装说明

`npm install auto-image-watermark`


## 快速使用

```js
import {create} from 'auto-image-watermark';
const H5 = create({
      width: 375,
      height: 600,
      backgroundColor: '#fff',
      debug: false,
      pixelRatio: 2,
      blocks: [{
          width: 650,
          height: 300,
          x: 1,
          y: 2,
          borderWidth: 4,
          borderColor: '#000',
          borderRadius: 30,
          backgroundColor: '#fff',
          text: {
            text: [{
                x: 12,
                y: 40,
                text: '块中的文字',
                fontSize: 35,
                color: '#f00',
                width: 300
              },
              {
                x: 182,
                y: 90,
                text: '过长文字缩略',
                fontSize: 35,
                color: '#f76',
                width: 300
              }
            ]

          },
          zIndex: 1
        },
        {
          width: 650,
          height: 200,
          x: 10,
          y: 400,
          borderWidth: 6,
          borderColor: '#ff00ff',
          borderRadius: 50,
          backgroundColor: '#ff0',
          opacity: 0.5,
          zIndex: 2
        },
      ],
      lines: [{
        startX: 250,
        startY: 250,
        endX: 550,
        endY: 250,
        width: 9,
        color: 'green',
        zIndex: 128
      }],
      texts: [{
        x: 113,
        y: 132,
        text: 'hello world',
        fontSize: 57,
        baseLine: 'middle',
        textAlign: 'left',
        color: 'rgba(255,0,0)',
        zIndex: 8
      }, ],
      images: [{
          width: 276,
          x: 74,
          y: 170,
          borderRadius: 12,
          borderColor: '#f30',
          borderWidth: 4,
          url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
          zIndex: 40
        }
      ]
    });
```

## API

>create(config) => Promise<{base64:string}>;

### create 参数说明

| 参数            | 必填   |       类型         |  说明      |
| ----------      | :----: | :---------------: | --------- |
| width           |  是    |       Number        |  画布宽度      |
| height          |  是    |       Number        |  画布高度      |
| backgroundColor       |  否    |       String        |  画布背景色      |
| blocks      |  否    |       Array        |  绘制块 ，具体参见blocks参数详解     |
| lines       |  否    |       Array        |  绘制线 ，具体参见lines参数详解      |
| texts       |  否    |       Array        |  绘制文字 ，具体参见texts参数详解     |
| images      |  否    |       Array        |  绘制图片 ，具体参见images参数详解     |

### blocks 参数说明

| 参数            | 必填   |       类型         |  说明      |
| ----------      | :----: | :---------------: | --------- |
| x       |  是    |       Number        |  块的横坐标      |
| y       |  是    |       Number        |  块的纵坐标      |
| width           |  是    |       Number        |  块宽度      |
| height          |  是    |       Number        |  块高度      |
| backgroundColor       |  否    |       String        |  块背景色      |
| borderWidth       |  否    |       Number        |  边框宽度      |
| borderColor      |  否    |       String        |  边框颜色    |
| borderRadius       |  否    |       Number        |  圆角      |
| text       |  否    |       Object      |  块里面可以填充文字，text.text参考texts字段解释    |
| zIndex      |  否    |       Number       |  层级，越大越高     |

### lines 参数说明

| 参数            | 必填   |       类型         |  说明      |
| ----------      | :----: | :---------------: | --------- |
| startX       |  是    |       Number        |  起始横坐标      |
| startY       |  是    |       Number        |  起始纵坐标      |
| endX           |  是    |       Number        |  终点横坐标     |
| endY          |  是    |       Number        |  终点纵坐标      |
| width       |  是    |       Number        |  线的宽度      |
| color       |  否    |       String        |  线的颜色     |
| zIndex      |  否    |       Number       |  层级，越大越高     |

### texts 参数说明

| 参数            | 必填   |       类型         |  说明      |
| ----------      | :----: | :---------------: | --------- |
| x       |  是    |       Number        |  文字横坐标      |
| y       |  是    |       Number        |  文字纵坐标      |
| text           |  是    |       Number        |  文字内容      |
| fontSize          |  是    |       Number        |  文字大小      |
| color       |  否    |       String        |  文字颜色      |
| opacity       |  否    |       Number        |  文字透明度      |
| width      |  否    |       Number        |  文字最大宽度    |
| baseLine       |  否    |       String        |  top\|bottom\|middle\|alphabetic\|hanging 基线对齐方式      |
| textAlign       |  否    |       String        | start\|end\|left\|center\|right 对齐方式   |
| fontFamily       |  否    |       String        |  文字字体   |
| fontWeight       |  否    |       String        |  文字加粗   |
| fontStyle       |  否    |       String        |  文字倾斜    |
| zIndex      |  否    |       Number       |  层级，越大越高     |

### images 参数说明

| 参数            | 必填   |       类型         |  说明      |
| ----------      | :----: | :---------------: | --------- |
| x       |  是    |       Number        |  图片横坐标      |
| y       |  是    |       Number        |  图片纵坐标      |
| url       |  是    |       String        |  图片地址      |
| width           |  否    |       Number        |  图片宽度      |
| height          |  否    |       Number        |  图片高度      |
| borderWidth       |  否    |       Number        |  边框宽度      |
| borderColor      |  否    |       String        |  边框颜色    |
| borderRadius       |  否    |       Number        |  圆角      |
| zIndex      |  否    |       Number       |  层级，越大越高     |

### 注意事项

1.zIndex代表block、image、line、text之间的层级关系，层级越大，显示层级在越靠上;
2.blocks中的text的zIndex无效;
3.images中需要生成圆形图片则设置图片width、height、borderRadius三者相等即可;
4.单位统一(px);

## CHANGELOG

### V1.0.1

1. 新增圆形block，优化生成圆形图片方式；
2. 优化文字宽度省略问题；
3. 优化画布和画板的高宽；

### V1.0.0

1. 海报生成sdk-h5端；