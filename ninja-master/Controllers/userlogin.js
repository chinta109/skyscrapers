const User = require('../Database/Models/Users')
const bcrypt = require('bcrypt')
module.exports= (req,res)=>{

    const{ email, password }= req.body
    User.findOne({email:email},(error,user)=>{
        if (user){
            /*passowrd compare*/
            bcrypt.compare(password,user.password,(error,same)=>{
            if(same){
                res.redirect('/index')
            }else{         
                res.redirect('/auth/login')
            }
        
        }) 
    }else{
        return res.redirect('/auth/login')
    }
    })
}