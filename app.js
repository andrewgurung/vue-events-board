new Vue({
  // Target the div with id of 'events'
  el: '#events',

  // Here we can register any values/collection that hold data for application
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },

  // Run when application loads
  ready: function() {
    // When application loads, call the method that initialized some data
    this.fetchEvents();
  },

  // Register custom methods for the app
  methods: {

     // We dedicate a method to retrieving and setting some data
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'TIFF',
          description: 'Toronto International Film Festival',
          date: '2017-03-11'
        },
        {
          id: 2,
          name: 'The Martian Premiere',
          description: 'The Martian comes to theatres.',
          date: '2015-10-02'
        },
        {
          id: 3,
          name: 'SXSW',
          description: 'Music, film and interactive festival in Austin, TX.',
          date: '2016-03-11'
        }
      ];

      // $set is a convenience method provided by Vue that is similar to pushing data into array
      this.$set('events', events);
    },

    // Adds an event to the existing events array
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);

        // Reset form input fields
        this.event = {name: '', description: '', date: ''};
      }
    }
  }

});
