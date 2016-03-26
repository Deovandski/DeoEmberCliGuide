import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    // Website related
    this.route('about');

    // Projects
    this.route('archives', function() {
        this.route('index', { path: '/' });
        this.route('pageOne');
        this.route('pageTwo');
    });
});

export default Router;
