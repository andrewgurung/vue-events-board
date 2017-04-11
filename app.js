new Vue({
  // Target the div with id of 'events'
  el: '#events',

  // Here we can register any values/collection that hold data for application
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },

  // Run when application loads
  ready: function() {},

  // Register custom methods for the app
  methods: {
    addEvent: function() {
      console.log('addEvent fired!');
    }
  }

});
