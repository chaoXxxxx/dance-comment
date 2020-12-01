English | [简体中文](./README.zh-CN.md)

<h1 align="center">dance-comment</h1>

- example (default)
![avatar](/image/default.gif)
- use
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


- example (javascript)
![avatar](/image/javascript.gif)
- use
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
