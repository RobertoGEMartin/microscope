/**
 * Created by Rober on 19/05/15.
 */
var postsData = [ {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
},
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    }, {
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: postsData
});