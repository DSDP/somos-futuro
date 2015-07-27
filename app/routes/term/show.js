import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
      return Ember.RSVP.hash({
          term: this.store.find('term', params.term_id),
          subterms: this.get('store').find('term', {filter: {parent: params.term_id}})
      });		
	}
});