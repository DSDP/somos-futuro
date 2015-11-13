import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {

  this.resource('post', function() {
  	this.route('show', {path: '/:post_id'});
  });
  this.resource('term', function() {
  	this.route('show', {path: '/:term_id'});
  }); 
  this.resource('sub-term', function() {
    this.route('show', {path: '/:term_id'});
  });   
  this.resource('page', function() {
  	this.route('show', {path: '/:page_id'});
  });    
});


export default Router;

