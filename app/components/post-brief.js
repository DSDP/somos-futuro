import Ember from 'ember';

export default Ember.Component.extend({
	excerptSafe: Ember.computed('post.excerpt', function () {
		return this.get('post.excerpt').replace(/(<a(.*)>)*(<\/a>)/, "");
	})
});
