/**
 * Created by Rober on 19/05/15.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});