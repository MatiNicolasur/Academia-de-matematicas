const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  reason: { type: String, required: true }
});

module.exports = mongoose.model('Applicant', applicantSchema);