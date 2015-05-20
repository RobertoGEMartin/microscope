/**
 * Created by Rober on 19/05/15.
 */
Template.PostsList.helpers({
    posts: function () {
        return Posts.find();
    }
});