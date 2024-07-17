const express = require('express');
const monkeyCtrl = require('../controllers/monkey');

const router = express.Router();

router.post('/', monkeyCtrl.addMonkey);

router.get('/', monkeyCtrl.findAllMonkey);

router.get('/:id', monkeyCtrl.findOneMonkey);

router.put('/:id', monkeyCtrl.modifyMonkey);

router.delete('/:id', monkeyCtrl.deleteOneMonkey);


module.exports = router;