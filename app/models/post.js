import PostModel from 'ember-cli-to-wp-theme/models/post';

export default PostModel.extend({
  acf: DS.attr(),

  isSomosFuturo: Ember.computed('id', function () {
  	if (this.get('id') === "1138") {
  		return true;
  	}
  }),
});
