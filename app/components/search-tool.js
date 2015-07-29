import Ember from 'ember';

export default Ember.Component.extend({
	posts: [],
	query: '',
	searching: false,
	searched: false,
	interval: null,
	show: false,

	actions: {
		open: function () {
			this.set('show', true);
		},

		close: function () {
			this.set('show', false);
		},		
	},

	searchChanged: function () {
		var _this = this;
		if (this.get('interval')) {
			clearInterval(this.get('interval'));
		} 
		if (this.get('query') && this.get('query').length > 3) {
			var interval = setInterval(function () {
				_this.set('posts', []);
				_this.set('searching', true);
				_this.set('searched', false);
				_this.get('store').find('post', {filter: {s: _this.get('query'), posts_per_page: 100}}).then(function (results) {
					_this.set('posts', results);
					_this.set('searching', false);
					_this.set('searched', true);				
				});		
				clearInterval(_this.get('interval'));	
			}, 500);
			this.set('interval', interval);
		}
	}.observes('query'),
});
