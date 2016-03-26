## Deo's Ember Cli Guide

#UNDER CONSTRUCTION!

[![Build Status][travis-badge]][travis] [![Test Coverage][testCoverage-badge]][testCoverage] [![Code Climate][codeClimate-badge]][codeClimate] [![Dependency Status][dependency-badge]][dependency] [![Security][security-badge]][security] [![Issues][issues-badge]][issues]

[Guide](https://deovandski.herokuapp.com/emberTutorial/) (Initial load may be slow due to Dyno sleep mode implemented by [Heroku](https://www.heroku.com/pricing).)

## Notice

This guide was created with the purpose to cover the entire process from setting up a virtualized Ubuntu to deploying the website live on Heroku.

## Requirements

1. [Node.js](https://nodejs.org/)
2. [Npm](https://www.npmjs.com/)
3. [Ember CLI](http://ember-cli.com/)
3. [Bower](https://www.npmjs.com/package/bower)


## Ember Cli update

1. Follow Project Update instructions on the choose [Ember Cli Release](https://github.com/ember-cli/ember-cli/releases)
2. ember install ember-cli-blanket
3. npm install --save-dev ember-cli-sass
4. ember install ember-cli-bootstrap-sassy
5. ember install ember-cli-document-title
6. For Heroku Deployment, you may need to purge the cache with heroku repo:purge_cache -a APPNAME

Something not working after update? Compare diffs and let me know what I missed by opening an issue. 

## License

[The MIT License (MIT)](license.md)

Copyright (c) 2016, Deovandski Skibinski Junior. All rights reserved to the code. For copyright enquiries or notification, please contact deovandski@outlook.com so that I can take the necessary actions.

[travis]: https://travis-ci.org/Deovandski/DeoPersonalWebsite
[travis-badge]: https://travis-ci.org/Deovandski/DeoPersonalWebsite.svg?branch=master
[testCoverage]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/coverage
[testCoverage-badge]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/badges/coverage.svg
[codeClimate]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite
[codeClimate-badge]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/badges/gpa.svg
[security]: https://hakiri.io/github/Deovandski/DeoPersonalWebsite/master
[security-badge]: https://hakiri.io/github/Deovandski/DeoPersonalWebsite/master.svg
[dependency]: https://gemnasium.com/Deovandski/DeoPersonalWebsite
[dependency-badge]: https://gemnasium.com/Deovandski/DeoPersonalWebsite.svg
[issues]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite
[issues-badge]: https://codeclimate.com/github/Deovandski/DeoPersonalWebsite/badges/issue_count.svg

