# wExtensions

A collection of JavaScript extensions.


## Project Goals

The goal of this project is to be able to quickly add uncommonly used functions into any project without having to always search Google or look through old code by putting them all in one easily accessible spot.  It also lets us fix any bugs and have the latest versions available for use in the future.  Each extensions directory contains documentation and a test file making it easer for developers to make contributions by either submitting a test case or making bug fixes to individual extensions.

Note that the project contains extensions not only for JavaScript but for other popular libraries like jQuery.  Feel free to add folders for any other libraries you may want to add to this project.


#### JavaScript Functions

[`base64Decode`](https://github.com/websanova/wExtensions/base64Decode/README.md)
[`base64Encode`](https://github.com/websanova/wExtensions/base64Encode/README.md)
[`capitalize`](https://github.com/websanova/wExtensions/capitalize/README.md)
[`reverse`](https://github.com/websanova/wExtensions/reverse/README.md)
[`rgbHex`](https://github.com/websanova/rgbHex)
[`shuffleArray`](https://github.com/websanova/wExtensions/shuffleArray/README.md)
[`stripTags`](https://github.com/websanova/wExtensions/stripTags/README.md)
[`timer`](https://github.com/websanova/wExtensions/timer/README.md)
[`trim`](https://github.com/websanova/wExtensions/trim/README.md)
[`url`](https://github.com/websanova/js-url)
[`utf8Decode`](https://github.com/websanova/wExtensions/utf8Decode/README.md)
[`utf8Encode`](https://github.com/websanova/wExtensions/utf8Encode/README.md)
[`wordcount`](https://github.com/websanova/wExtensions/wordcount/README.md)
[`mousestop`](https://github.com/websanova/wExtensions/mousestop/README.md)


#### jQuery Methods

[`cssAll`]()
[`hasClassRegex`]()
[`maxChars`]()
[`removeClassRegex`]()


#### jQuery Selectors

[`external`]()
[`height`]()
[`inView`]()
[`leftOf`]()
[`loaded`]()
[`rightOf`]()
[`target`]()
[`width`]()


## Running Test Cases

To run test cases you will have to download the source from GitHub and run any of the `index.html` files for any particular extensions you want to test.  You can also just access the root `index.html` file to see a listing of all extensions.  Also note that if you download any of these files make sure you also have the assets folder as it contains the required qunit and jquery files needed for some of the etensions.  


## Contributing

If you want to contribute an extension just add an exmaple in the format of the existing extensions.  Basically each folder should have:

* main file
* index.html with some test or a demo
* README.md with some basic info

For any other questions just post to the [issues](https://github.com/websanova/wExtensions/issues) please.


## License

MIT licensed

Copyright (C) 2011-2013 Websanova http://www.websanova.com