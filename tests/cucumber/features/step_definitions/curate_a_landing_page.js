/**
* Created by lscordilis on 7/14/2015.
*/


'use strict';

module.exports = function() {

    var url = require('url');

    this.Given(/^I have created a landing page with the heading "([^"]*)"$/, function(heading, callback) {
        this.server.call('page/create', {   //create a landing page with heading whatever
            path: '/',
            heading: heading
        }).then(callback);
    });

    this.When(/^a user navigates to the landing page$/, function(callback) {
        this.client.url(process.env.ROOT_URL)
            .waitForVisible('body *')
            .waitForVisible('#test')
            .getText('#test').then(function(result) {
                console.log(result);
            }).call(callback);   //just go to the root url of the page
    });

    this.Then(/^they see the heading "([^"]*)"$/, function(heading, callback) {
        console.log(heading);
        this.client
            .waitForVisible('body *')
            .waitForVisible('#test').pause(1000)
            .getText('#test').then(function(result){
                console.log(result);
            }).should.become(heading).and.notify(callback);
    });
};