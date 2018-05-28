import { Mongo } from 'meteor/mongo';

Meteor.methods({
    'bins.insert': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            // If we don't use function keyword, it would actually break this.userId
            ownerId: this.userId
        });
    }
});

export const Bins = new Mongo.Collection('bins');
 