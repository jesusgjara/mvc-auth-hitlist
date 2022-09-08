const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Company', CompanySchema)
