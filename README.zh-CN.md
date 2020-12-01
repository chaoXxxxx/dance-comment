[English](./README.md) | 简体中文

<h1 align="center">dance-comment</h1>


- 拉取项目代码
```
git clone https://github.com/chaoXxxxx/dance-comment.git
or
git clone https://gitee.com/ChaoXxxx/dance-comment.git
```

- 编译项目
```
tsc
```

- 使用
```
import DanceComment from 'dance-comment'
```
```
new DanceComment().init()
```
```
const config = {
  time: 10000,
  useTemplate: true,
  orderPlay: true,
  template: []
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