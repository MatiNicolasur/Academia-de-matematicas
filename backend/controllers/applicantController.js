const Applicant = require('../models/applicant');

exports.createApplicant = async (req, res) => {
  try {
    const { name, email, phone, reason } = req.body;
    const applicant = new Applicant({ name, email, phone, reason });
    await applicant.save();
    res.status(201).json({ message: 'Postulación enviada correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar la postulación.' });
  }
};