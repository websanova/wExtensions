# String.trimRegex()

## About

A JavaScript extension of the String object to trim a string.  It also accepts an argument allowing you to specify the character to trim.

## Examples

```js
"  hello world  ".trimRegex(); // "hello world"
"aahello worldaa".trimRegex('a'); // "hello world"
"$$hello world$$".trimRegex('$'); // "hello world"
```

## Author

[Websanova](http://websanova.com) - JavaScript Plugin Development