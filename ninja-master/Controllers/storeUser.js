const User = require('../Database/Models/Users')

module.exports = (req, res) =>{
    User.create(req.body,(error, User)=>{
        if(error){
            return res.redirect('/auth/register')
        }
        res.redirect("/index")
    })

}