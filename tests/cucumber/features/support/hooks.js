/**
 * Created by lscordilis on 7/14/2015.
 */

module.exports = function() {
    this.Before(function(callback) {
        this.server.call('reset').then(callback);
    });
};