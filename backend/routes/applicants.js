const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicantController');

router.post('/', applicantController.createApplicant);

module.exports = router;