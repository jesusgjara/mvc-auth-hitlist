const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companies') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, companyController.getCompanies)

router.get('/add', ensureAuth, companyController.getAddCompany)

router.get('/edit/:id', ensureAuth, companyController.getEdit)

router.post('/add', companyController.addCompany)

// router.put('/markComplete', companyController.markComplete)

// router.put('/markIncomplete', companyController.markIncomplete)

// router.delete('/deleteCompany', companyController.deleteCompany)

module.exports = router