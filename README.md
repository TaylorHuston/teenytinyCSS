#Teeny Tiny CSS

Status: Alpha

I like the idea of using a CSS framework to speed up development, but all of the ones I've come across are too heavy for my taste. Thought it would be fun to roll my own.

The idea is to have something you can use to ensure that the layout of your website works and is responsive. Beyond that it doesn't force any conventions on you in the way of look, feel, colors, etc.

HEAVILLY dependant on Flex Box, so it's older browesr support is probably pretty bad.

#Installation
```
$ bower install teenytinycss
$ cd <bower folder>/teenytinycss/
$ gulp build
```
#Setup
Link the teenytiny.css fil into your HTML document. Assuming you didn't edit the gulpfile, it should be something like ``<bower folder>/teenytinycss/dist/css/teenytiny.css``

#Grid
Wrap the section you want to use the grid in the ``teeny-g`` class, ie:
``<body class="teeny-g"></body>''

##Rows and Columns
The grid works on a basic rows and columns format. Rows expand to the width of the containing element. Columns are broken up into varying 10% based widths.

For example
```
<div class="row">
   <div class="col col-10">Col 10</div>
   <div class="col col-20">Col 20</div>
</div>
```

Will create a row that contains two columns, one at 10% width and one at 20% width.


#Forms
Coming soon

#Customizing
Coming soon



