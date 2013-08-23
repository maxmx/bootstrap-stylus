Bootstrap Stylus 3.0.0
======================

Port of the amazing [Bootstrap 3](https://github.com/twbs/bootstrap) to [Stylus 0.32.1](http://learnboost.github.com/stylus/).

This version does not have any dependencies on [nib](https://github.com/visionmedia/nib). 

( _Note: Bootstrap Stylus must be imported before nib so that Stylus libs are not transpiled as nib mixins_ )

There might be some slight color differences due to the differences between the color functions in LESS and those in Stylus.

- Compile bootstrap.styl to get the stylesheet
- Compile theme.styl for the old Twitter theme

## Installing

via [Bower](https://github.com/bower/bower):

```
$ bower install bootstrap-stylus
```

_Note: Legacy 2.3.2 version is kept in [this release](https://github.com/Acquisio/bootstrap-stylus/releases/tag/v2.3.2)_