const Company = require('../models/Company')

module.exports = {
    getCompanies: async (req,res)=>{
        console.log(req.user)
        try{
            const companies = await Company.find({userId:req.user.id})
            const companiesLeft = await Company.countDocuments({userId:req.user.id,available: true})
            res.render('dashboard.ejs', {companies: companies, left: companiesLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    addCompany: async (req, res)=>{
        try{
            await Company.create({companyName: req.body.companyName, role:req.body.role, available: true, userId: req.user.id, link: req.body.roleLink})
            console.log('New company added')
            res.redirect('/profile')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteCompany: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    