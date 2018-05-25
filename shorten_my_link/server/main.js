import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links', function() {
    return Links.find({});
  });
});

//    localhost:3000/   NO MATCH
//    localhost:3000/books/harry_potter   NO MATCH
//    localhost:3000/abcd   will match!!

const middleware = ConnectRoute(function(router) {
  router.get('/:token', (req) => console.log(req));
});

WebApp.connectHandlers.use(middleware);