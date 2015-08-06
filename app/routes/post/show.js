import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
          post: this.store.find('post', params.post_id),
          term: this.get('store').find('post', params.post_id).then(function(data){
          	if(data._data.terms.category[0].parent === null){
          		return data._data.terms.category[0];
          	} else {
          		return data._data.terms.category[1];
          	}
          }),
          subterm: this.get('store').find('post', params.post_id).then(function(data){
          	if(data._data.terms.category[0].parent !== null){
          		return data._data.terms.category[0];
          	} else {
          		return data._data.terms.category[1];
          	}
          })
      });		
	}
});