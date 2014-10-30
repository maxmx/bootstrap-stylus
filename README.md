Bootstrap Stylus 3.3.0
======================

Port of the amazing [Bootstrap 3.3.0](https://github.com/twbs/bootstrap) to [Stylus 0.47.0](http://learnboost.github.com/stylus/).

There might be some slight color differences due to the differences between the color functions in LESS and those in Stylus.

## Installing

Latest version via [Bower](https://github.com/bower/bower):

```
$ bower install bootstrap-stylus
```

Legacy 2.3.2 version is kept in [this release](https://github.com/Acquisio/bootstrap-stylus/releases/tag/v2.3.2) and can be installed via Bower as well, however it does not include any build scripts.

```
$ bower install bootstrap-stylus#2.3.2
```

## Compiling CSS from Stylus

Bootstrap Stylus uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Install the [necessary local dependencies](package.json) via `npm install`

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files. **Uses [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Legacy 2.3.2 Theme - `grunt theme`
This will compile the `theme.styl` separately and output it to the `/dist` folder.

#### Watch - `grunt watch`
This is a convenience method for watching just Stylus files and automatically building them whenever you save.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.


## Original Authors

**Mark Otto**

+ [http://twitter.com/mdo](http://twitter.com/mdo)
+ [http://github.com/mdo](http://github.com/mdo)

**Jacob Thornton**

+ [http://twitter.com/fat](http://twitter.com/fat)
+ [http://github.com/fat](http://github.com/fat)



## Copyright and license

Copyright 2013 Twitter, Inc under [the Apache 2.0 license](LICENSE).
