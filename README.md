# What is this?

Bootstrap's [Modal](http://twitter.github.io/bootstrap/javascript.html#modals) wrapped in a Backbone [View](http://backbonejs.org/#View).

# How do I check it out?

You'll need [Bower](http://bower.io/) to install dependencies, then just run `bower install` and open `index.html` in a browser.

The only file of real import is `coffee/modal.coffee` (or the transpiled `js/modal.js`)

# How do I use it?

Check `coffee/main.coffee` of `js/main.js` for a quick example.

The bootstrap-modal is a jQuery plugin, so you simple include it and then you can create a modal out of any element. Refer to [their docs](http://twitter.github.io/bootstrap/javascript.html#modals) for usage examples.

This wrapper follows the default bootstrap-modal methods, so using it is pretty straighforward.

Custom methods are as follows:

<table>
  <tr><td>Method</td><td>Description</td></tr>
  <tr><td>show</td><td>Shows the modal</td></tr>
  <tr><td>hide</td><td>Hides the modal</td></tr>
  <tr><td>toggle</td><td>Toggles show/hide on the modal</td></tr>
  <tr><td>setTitle</td><td>Sets the title content of the modal</td></tr>
  <tr><td>setContent</td><td>Sets the body content of the modal</td></tr>
  <tr><td>setFooter</td><td>Sets the footer content of the modal</td></tr>
  <tr><td>addCloseButton</td><td>Adds working close button in the header</td></tr>
  <tr><td>removeCloseButton</td><td>Remove the close button from the header</td></tr>
</table>

# License

The MIT License (MIT)

Copyright (c) 2013 Joe Fleming

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE