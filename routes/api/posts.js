const express = require('express');

const router = express.Router();

//@route GET api/posts
//@desc  TEst route
//@accsess Public

router.get('/', (req,res) => res.send('Posts route'));

module.exports = router;