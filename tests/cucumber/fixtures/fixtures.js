/**
 * Created by lscordilis on 7/23/2015.
 */

(function(){
    Meteor.methods({
        'reset': function() {
            Pages.remove({});
        },
        'page/create': function(page){
            Pages.insert(page);
        }
    });
})();