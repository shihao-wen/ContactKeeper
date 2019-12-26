const express = require('express');
const router = express.Router();

// @route       Get api/auth
// @desc        Get logged in user
// @access      Private
router.get('/', (req, res) => {
  res.send('Get logged in user.');
});

// @route       POST api/auth
// @desc        Auth user & get Token
// @access      Public
router.post('/', (req, res) => {
  res.send('Login User.');
});

module.exports = router;
