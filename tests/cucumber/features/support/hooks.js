/**
 * Created by lscordilis on 7/23/2015.
 */

(function() {
    module.exports = function() {
        this.Before(function(callback){
            this.server.call('reset').then(callback);
        });
    };
})();