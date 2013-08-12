# ctx.fillArea()

## About

A bucket/fill tool extension for HTML5 canvas.  The file is a drop in and will extend the `ctx` object of your canvas.

Thanks to William Malone where the initial fill algorithm comes from.  You can check out the [original article](http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool) for a more detailed explanation of how it works.

## Examples

Only x, y coorindates and a color are required for the fillArea to work.

```js
$('#canvas').fillArea(5, 7, '#ff0000');
```

## Author

[Websanova](http://websanova.com) - JavaScript Plugin Development