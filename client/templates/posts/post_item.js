/**
 * Created by Rober on 19/05/15.
 */
Template.PostItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});