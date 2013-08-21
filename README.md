Bootstrap Stylus 2.3.2
======================

Port of the amazing [Twitter Bootstrap 2.3.2](https://github.com/twitter/bootstrap) to [Stylus](http://learnboost.github.com/stylus/).

This version does not have any dependencies on [nib](https://github.com/visionmedia/nib). ( _Note: Bootstrap Stylus must be imported before nib so that Stylus libs are not transpiled as nib mixins_ )

There might be some slight color differences due to the differences between the color functions in LESS and those in Stylus.

- Compile bootstrap.styl to get the basic stylesheet.
- Compile responsive.styl to get the additional responsive stylesheets.

_Bug: navbarCollapseWidth is not used because of a stylus bug, you must go edit the value directly in the responsive-navbar file._
_Note: This translation is fixed to 12 columns_

## Installing

via [Bower](https://github.com/bower/bower):

```
$ bower install bootstrap-stylus
```

