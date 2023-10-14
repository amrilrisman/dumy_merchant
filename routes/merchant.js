var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/dummy', function(req, res, next) {
    console.log(req.body);
    return res.status(200).json({
        response: "OK"
    })
});

module.exports = router;
