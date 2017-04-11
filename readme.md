# Vue Events Board
A simple events bulletin board application that will allow users to add and remove events

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Installation
------------
1. Run `npm install`.
2. Open `index.html` in browser.

Using RESTful API
-----------------
- Vue is totally agnostic about the back end that we use for our applications. Just as long as the server responds to HTTP requests with JSON, we can use Vue Resource to handle data retrieval.

1. Use Node.js & Express for backend server and router.
2. RESTful requests towards the server to simulate CRUD on *events* model, instead of local hardcoded ones.

```js
// If we had a back end with an events endpoint set up that responds to GET requests
this.$http.get('api/events').success(function(events) {
  this.events = events;
}).error(function(error) {
  console.log(error);
});
```

Skills
-------
- Vue JS
- Bootstrap
