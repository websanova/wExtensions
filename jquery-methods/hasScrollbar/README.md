# .hasScrollbar()

## About

Returns a value of `true` or `false` based on whether the element currently has a scrollable area.  Note that this does not check if scrolling is set as in the case of `overflow-y:scroll` which would always display the scrollbars regardless of whethere there is any actualy scrolling or not.  In the latter case just check if the css property is set to `scroll` or not.

## Examples

```js
$('#elem').hasScrollbar(); // true/false
```

## Author

[Websanova](http://websanova.com) - JavaScript Plugin Development