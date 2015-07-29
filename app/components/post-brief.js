import Ember from 'ember';

export default Ember.Component.extend({
	showCategory: false,
	actions: {
		showPost: function (postId) {
			this.sendAction();
			this.get('router').transitionTo('post.show', postId);
		},

		showTerm: function (termId) {
			this.sendAction();
			this.get('router').transitionTo('sub-term.show', termId);
		},		
	},

	category: Ember.computed('post.categories.@each', function () {
		return this.get('post').get('categories').objectAt(0);
	}),

	excerptSafe: Ember.computed('post.excerpt', function () {
		return this.get('post.excerpt').replace(/(<a(.*)>)*(<\/a>)/, "");
	})
});
