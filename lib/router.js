//If you want to use a default layout template
// for all routes you can configure a global Router option.
Router.configure({
    layoutTemplate: 'layout'
});

//<template name="postsList">
Router.route('/', {name: 'PostsList'});

// render the Post template into the "main" region
// {{> yield}}
/*
Router.route('/', function(){
    this.render('postsList');
});*/
