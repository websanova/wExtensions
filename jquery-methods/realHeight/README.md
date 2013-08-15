# .realHeight()

## About

Get the real height of an element, by cloning and appending to body as absolute block, returning size and then removing from body.  Also supports both `inner` and `outer` heights along with `margin` option.

## Examples

```js
                                      // equivalent
$('#elem').realHeight();              // $('#elem').height();
$('#elem').realHeight('outer');       // $('#elem').outerHeight();
$('#elem').realHeight('outer', true); // $('#elem').outerHeight(true);
$('#elem').realHeight('inner');       // $('#elem').innerHeight();
```

## Author

[Websanova](http://websanova.com) - JavaScript Plugin Development