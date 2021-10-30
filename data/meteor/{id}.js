'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /meteor/{id}
 */
module.exports = {
    /**
     * summary: get information about a meteor
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     * operationId: getMeteor
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/meteor/{id}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/meteor/{id}',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
