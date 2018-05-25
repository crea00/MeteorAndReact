import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

// Executed whenever a user visits with a route like 'localhost:3000/abcd'
function onRoute(req, res, next) {
  // Take the token out of the url and try to a find a matching link in The Links Collection
  const link = Links.findOne({ token: req.params.token });
  
  // If we find a link object, redirect the user to the long URL

  // If we don't find a link object, send the user to our normal React app
  
}

//    localhost:3000/   NO MATCH
//    localhost:3000/books/harry_potter   NO MATCH
//    localhost:3000/abcd   will match!!
const middleware = ConnectRoute(function(router) {
  router.get('/:token', (req) => console.log(req));
});

WebApp.connectHandlers.use(middleware);