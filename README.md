Bootstrap Stylus 2.3.2
======================

Port of the amazing [Twitter Bootstrap 2.3.2](https://github.com/twitter/bootstrap) to [Stylus](http://learnboost.github.com/stylus/).

This version does not have any dependencies on [nib](https://github.com/visionmedia/nib). (*Note: Bootstrap Stylus must be imported before nib so that Stylus libs are not transpiled as nib mixins*)

There might be some slight color differences due to the differences between the color functions in LESS and those in Stylus.

- Compile bootstrap.styl to get the basic stylesheet.
- Compile responsive.styl to get the additional responsive stylesheets.

_Note: This translation is fixed to 12 columns_

### Adding as an [npm](https://npmjs.org/) Dependency

This port is not currently an npm module, however you still add the repository to your package.json as dependency.

*Eg:*

	"dependencies": {
		"bootstrap-stylus": "https://github.com/Acquisio/bootstrap-stylus/tarball/master"
	}

