const express = require('express');
const {getCharacter} = require("./character.controllers");
const router = express.Router();

router.get('/', getCharacter)

module.exports = router;