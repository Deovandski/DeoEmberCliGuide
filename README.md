## Deo's Ember Cli Guide

[![Build Status][travis-badge]][travis] [![Test Coverage][testCoverage-badge]][testCoverage] [![Code Climate][codeClimate-badge]][codeClimate] [![Dependency Status][dependency-badge]][dependency] [![Issues][issues-badge]][issues]

[Visit the Guide](https://deovandski.herokuapp.com/emberTutorial/) (Initial load may be slow due to Dyno sleep mode implemented by [Heroku](https://www.heroku.com/pricing).)

## Notice

This guide was created with the purpose to cover the entire process from setting up a virtualized Ubuntu to deploying the website live on Heroku.

## Requirements

1. [Node.js](https://nodejs.org/)
2. [Npm](https://www.npmjs.com/)
3. [Ember CLI](http://ember-cli.com/)
3. [Bower](https://www.npmjs.com/package/bower)


## Ember Cli update

1. Follow Project Update instructions of the choosen [Ember Cli Release](https://github.com/ember-cli/ember-cli/releases)
2. Carefully review what the update changed on your files.
2. ember install ember-cli-blanket
6. For Heroku Deployment, you may need to purge the cache with heroku repo:purge_cache -a APPNAME

Something not working after update? Compare diffs and let me know what I missed by opening an issue. 

## License

[The MIT License (MIT)](license.md)

Copyright (c) 2016, Deovandski Skibinski Junior. All rights reserved to the code. For copyright enquiries or notification, please contact deovandski@outlook.com so that I can take the necessary actions.

[travis]: https://travis-ci.org/Deovandski/DeoEmberCliGuide
[travis-badge]: https://travis-ci.org/Deovandski/DeoEmberCliGuide.svg?branch=master
[testCoverage]: https://codeclimate.com/github/Deovandski/DeoEmberCliGuide/coverage
[testCoverage-badge]: https://codeclimate.com/github/Deovandski/DeoEmberCliGuide/badges/coverage.svg
[codeClimate]: https://codeclimate.com/github/Deovandski/DeoEmberCliGuide
[codeClimate-badge]: https://codeclimate.com/github/Deovandski/DeoEmberCliGuide/badges/gpa.svg
[dependency]: https://gemnasium.com/Deovandski/DeoEmberCliGuide
[dependency-badge]: https://gemnasium.com/Deovandski/DeoEmberCliGuide.svg
[issues]: https://codeclimate.com/github/Deovandski/DeoEmberCliGuide
[issues-badge]: https://codeclimate.com/github/Deovandski/DeoEmberCliGuide/badges/issue_count.svg

