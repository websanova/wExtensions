# wExtensions

A collection of JavaScript extensions.

#### JavaScript Functions

[`base64Decode`](https://github.com/websanova/wExtensions/tree/master/js-functions/base64Decode#windowbase64decode)
[`base64Encode`](https://github.com/websanova/wExtensions/tree/master/js-functions/base64Encode#windowbase64encode)
[`capitalize`](https://github.com/websanova/wExtensions/tree/master/js-functions/capitalize#stringcapitalize)
[`color2color`](https://github.com/indyarmy/color2color#color2color---javascript-function)
[`reverse`](https://github.com/websanova/wExtensions/tree/master/js-functions/reverse#stringreverse)
[`rgbHex`](https://github.com/websanova/rgbHex#rgbhex)
[`shuffleArray`](https://github.com/websanova/wExtensions/tree/master/js-functions/shuffleArray#windowshufflearray)
[`stripTags`](https://github.com/websanova/wExtensions/tree/master/js-functions/stripTags#stringstriptags)
[`trimChar`](https://github.com/websanova/wExtensions/tree/master/js-functions/trimChar#stringtrimchar)
[`uniqueId`](https://github.com/websanova/wExtensions/tree/master/js-functions/uniqueId#windowuniqueid)
[`url`](https://github.com/websanova/js-url#url)
[`utf8Decode`](https://github.com/websanova/wExtensions/tree/master/js-functions/utf8Decode#windowutf8decode)
[`utf8Encode`](https://github.com/websanova/wExtensions/tree/master/js-functions/utf8Encode#windowutf8encode)
[`wordcount`](https://github.com/websanova/wExtensions/tree/master/js-functions/wordcount#stringwordcount)

#### jQuery Methods

[`caretPosition`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/caretPosition#caretposition)
[`charsPerLine`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/charsPerLine#charsperline)
[`hasClassRegex`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/hasClassRegex#hasclassregex)
[`hasScrollbar`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/hasScrollbar#hasscrollbar)
[`lineCount`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/lineCount#linecount)
[`realHeight`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/realHeight#realheight)
[`realWidth`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/realWidth#realwidth)
[`mousestop`](https://github.com/websanova/mousestop#mousestopjs)
[`removeClassRegex`](https://github.com/websanova/wExtensions/tree/master/jquery-methods/removeClassRegex#removeclassregex)

#### HTML5

[`diamond`](https://github.com/websanova/wExtensions/tree/master/html5/diamond#ctxdiamond)
[`ellipse`](https://github.com/websanova/wExtensions/tree/master/html5/ellipse#ctxellipse)
[`fillArea`](https://github.com/websanova/wExtensions/tree/master/html5/fillArea#ctxfillarea)
[`hexagon`](https://github.com/websanova/wExtensions/tree/master/html5/hexagon#ctxhexagon)
[`ninjastar`](https://github.com/websanova/wExtensions/tree/master/html5/ninjastar#ctxninjastar)
[`octagon`](https://github.com/websanova/wExtensions/tree/master/html5/octagon#ctxoctagon)
[`parallelogram`](https://github.com/websanova/wExtensions/tree/master/html5/parallelogram#ctxparallelogram)
[`pentagon`](https://github.com/websanova/wExtensions/tree/master/html5/pentagon#ctxpentagon)
[`roundedRect`](https://github.com/websanova/wExtensions/tree/master/html5/roundedRect#ctxroundedrect)
[`star`](https://github.com/websanova/wExtensions/tree/master/html5/star#ctxstar)
[`trapezoid`](https://github.com/websanova/wExtensions/tree/master/html5/trapezoid#ctxtrapezoid)
[`triangle`](https://github.com/websanova/wExtensions/tree/master/html5/triangle#ctxtriangle)


## Project Goals

The goal of this project is to be able to quickly add uncommonly used functions into any project without having to always search Google or look through old code by putting them all in one easily accessible spot.  It also lets us fix any bugs and have the latest versions available for use in the future.  Each extensions directory contains documentation and a test file making it easer for developers to make contributions by either submitting a test case or making bug fixes to individual extensions.

What qualifies as an entry is something that is a small(ish) piece of code that should for more or less have a "best" solution.  For instance there is probably a best way to write a way to convert rgb values to hex values.  But something like a tooltip plugin may have many implementations each of which are equally viable.  Therefore we want to focus on smaller code snippets and utitlity type functions that we can just toss into our projects when needed.

Note that the project contains extensions not only for JavaScript but for other popular libraries like jQuery.  Feel free to add folders for any other libraries you may want to add to this project.


## Running Test Cases

To run test cases you will have to download the source from GitHub and run any of the `index.html` files for any particular extensions you want to test.  You can also just access the root `index.html` file to see a listing of all extensions.  Also note that if you download any of these files make sure you also have the assets folder as it contains the required qunit and jquery files needed for some of the etensions.  


## Contributing

If you want to contribute an extension just add an exmaple in the format of the existing extensions.  Basically each folder should have:

* some kind of main .js file
* index.html with some test or a demo
* README.md with some basic info

You can also just point to an existing project if it already exists somewhere, preferably on GitHub.

For any other questions just post to the [issues](https://github.com/websanova/wExtensions/issues) please.  Also use the issues page to provide suggestions for any new extensions with either a code sample or link.


## Grunt.js

If you want to use Grunt you will need to install the required plugins locally using `npm install` in the root folder of the project.  If you need to setup Grunt on your system you can follow this [Setting up Grunt.js](http://www.websanova.com/blog/javascript/how-to-setup-grunt) guide.


## License

MIT licensed

Copyright (C) 2011-2013 Websanova http://www.websanova.com