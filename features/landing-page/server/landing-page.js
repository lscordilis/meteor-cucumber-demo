/**
 * Created by lscordilis on 7/23/2015.
 */

Meteor.startup(function() {
    Pages.upsert({ path: '/'}, {
        path: '/',
        heading: 'Letterpress by zesty.dumpling'
    });
});