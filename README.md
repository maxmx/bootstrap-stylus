Bootstrap Stylus 3.3.7
======================

Port of the amazing [Bootstrap 3.3.7](https://github.com/twbs/bootstrap) to [Stylus 0.52.0](http://learnboost.github.com/stylus/).

## Installing

Latest version via [Bower](https://github.com/bower/bower):

```bash
$ bower install bootstrap-stylus
```

Legacy 2.3.2 version is kept in [this release](https://github.com/Acquisio/bootstrap-stylus/releases/tag/v2.3.2) and can be installed via Bower as well, however it does not include any build scripts.

```bash
$ bower install bootstrap-stylus#2.3.2
```

Via npm:

```bash
$ npm install bootstrap-styl
```
Example of requiring and using bootstrap middleware to create compile function to utilize in other frameworks.
```javascript
var bootstrap = require('bootstrap-styl'),
    stylus    = require('stylus');

function compile(str) {
  return stylus(str)
    .use(bootstrap());
}
```

To import whole bootstrap in your stylus file:
```stylus
@import bootstrap
```

Alternatively to import individual components:
```stylus
@import 'bootstrap/variables'
@import 'bootstrap/mixins'
@import 'bootstrap/alerts'

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

### Usage
* You may select what css components you want to include by editing `stylus/bootstrap.styl`.
* You may override [bootstrap variables](http://getbootstrap.com/customize/#less-variables) in your private code, for example
```
// myStyles.styl
$font-family-serif ?= 'Merriweather', serif
$font-family-base ?= $font-family-serif
@import "bower_components/bootstrap-stylus/stylus/bootstrap.styl" // Or wherever your bootstrap.styl is located
```
this allows flexibility for easily updating to new bootstrap versions. See [?=](https://learnboost.github.io/stylus/docs/operators.html#conditional-assignment--).
* You may select what javascript components you want by editing the uglify task in `gulpfile.js`. You can ommit components by removing them from the `uglify:dist:files` list.

## Original Authors

**Mark Otto**

+ [http://twitter.com/mdo](http://twitter.com/mdo)
+ [http://github.com/mdo](http://github.com/mdo)

**Jacob Thornton**

+ [http://twitter.com/fat](http://twitter.com/fat)
+ [http://github.com/fat](http://github.com/fat)



## Copyright and license

Copyright 2013 Twitter, Inc under [the Apache 2.0 license](LICENSE).
