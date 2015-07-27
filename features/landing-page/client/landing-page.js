/**
 * Created by lscordilis on 7/23/2015.
 */

Template.landingPage.helpers({
    page: function() {
        return Pages.findOne({
            path: window.location.pathname
        });
    }
});