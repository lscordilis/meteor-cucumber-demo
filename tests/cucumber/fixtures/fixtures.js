/**
 * Created by lscordilis on 7/14/2015.
 */

Meteor.methods({
    'reset': function() {
        Pages.remove({});
    },
    'page/create': function(page) {
        Pages.insert(page)
    }
});
