import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
        post: this.get('store').find('post', {filter: {p: params.post_id}}).then(function(results){
		  return results.get('firstObject');
		})
      });		
	}
});