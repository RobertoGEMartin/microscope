/**
 * Created by Rober on 19/05/15.
 */
Template.postsList.helpers({
    posts: function () {
        return Posts.find();
    }
});