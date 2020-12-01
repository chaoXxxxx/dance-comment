[English](./README.md) | 简体中文

<h1 align="center">dance-comment</h1>

- 例子 (default)
![avatar](/image/default.gif)
- 使用
```
import DanceComment from 'dance-comment'
```
```
new DanceComment().init()
```
```
const config = {
  time: 1000,
  useTemplate: true,
  orderPlay: false
}
new DanceComment(config).init()
```


- 例子 (javascript)
![avatar](/image/javascript.gif)
- 使用
```
import DanceComment from 'dance-comment'
import javascript from 'dance-comment/template/javascript'
```
```
new DanceComment().init()
```
```
const config = {
  time: 200,
  useTemplate: false,
  template: javascript
}
new DanceComment(config).init()
```

- 参数

名 | 类型 | 默认 | 说明
-|-|-|-
time | number | 10000 | 更换时间ms(小于100ms则不更换)
useTemplate | boolean | true | 使用插件自带模板
template | array | [] | 自定义模板
orderPlay | boolean | true | 是否按循序切换,false为随机切换


```
config.template => array
[
  [
    '                 .--,       .--,                    ',
    '                ( (  \\.---./  ) )                   ',
    "                 '.__/o   o\\__.'                    ",
    '                    {=  ^  =}                       ',
    '                     >  -  <                        ',
    '                    /       "                       ',
    '                   //       \\\\                      ',
    '                  //|   .   |\\\\                     ',
    "                  '\\       /''_.-~^`'-.             ",
    "                     \\  _  /--'         `           ",
    '                   ___)( )(___                      ',
    '                  (((__) (__)))                     '
  ],
  [
    "           _._ _..._ .-',     _.._(`))             ",
    "          '-. `     '  /-._.-'    ',/              ",
    "             )         \\            '.             ",
    '            / _    _    |             "            ',
    '           |  a    a    /              |           ',
    '           \\   .-.                     ;           ',
    "            '-('' ).-'       ,'       ;            ",
    "               '-;           |      .'             ",
    '                  \\           \\    /               ',
    '                  | 7  .__  _.-\\   "               ',
    '                  | |  |  ``/  /`  /               ',
    '                 /,_|  |   /,_/   /                ',
    "                    /,_/      '`-'                 "
  ]
]
```