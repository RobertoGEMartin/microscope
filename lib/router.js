//If you want to use a default layout template
// for all routes you can configure a global Router option.
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function(){ return Meteor.subscribe('posts')}
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

// we’ve defined a new route named postsList and mapped it to the root / path.
Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function(){ return Posts.findOne(this.params._id);}
});

// render the Post template into the "main" region
// {{> yield}}
/*
Router.route('/', function(){
    this.render('postsList');
});*/
