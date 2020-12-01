English | [简体中文](./README.zh-CN.md)

<h1 align="center">dance-comment</h1>


- clone
```
git clone https://github.com/chaoXxxxx/dance-comment.git
or
git clone https://gitee.com/ChaoXxxx/dance-comment.git
```

- Compiles and minifies for production
```
tsc
```

- use
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

- parameter

name | type | default | explain
-|-|-|-
time | number | 10000 | replacement time MS (no replacement if less than 100ms)
useTemplate | boolean | true | use the template provided by the plug-in
template | array | [] | custom template
orderPlay | boolean | true | whether to switch in order or not. False means random switching

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
