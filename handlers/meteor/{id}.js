'use strict';
var dataProvider = require('../../data/meteor/{id}.js');
var data = require('../../data/meteor/info.js');
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
     */
    get: function getMeteor(req, res, next) {
        let metResult = data.meteor.find(record => record.id == req.params.id);
        console.log(metResult);
        if (metResult) {
            res.send(metResult);
        } else {
            res.status(405).send({
                'status': 405,
                'type': 'validation error',
                'message': 'id not found'
            });
        }
    }
};
