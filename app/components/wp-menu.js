import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: 'menu-wp',

  isShowMenu: false,
  show: false,
  
  actions: {
    toggle: function () {
      this.toggleProperty('show');
      this.toggleProperty('isShowMenu');
    },    
  },

});
