# .realWidth()

## About

Get the real width of an element, by cloning and appending to body as absolute block, returning size and then removing from body.  Also supports both `inner` and `outer` widths along with `margin` option.

## Examples

```js
                                     // equivalent
$('#elem').realWidth();              // $('#elem').width();
$('#elem').realWidth('outer');       // $('#elem').outerWidth();
$('#elem').realWidth('outer', true); // $('#elem').outerWidth(true);
$('#elem').realWidth('inner');       // $('#elem').innerWidth();
```

## Author

[Websanova](http://websanova.com) - JavaScript Plugin Development