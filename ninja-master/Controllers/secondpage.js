const User = require('../Database/Models/Users')
const Post = require('../Database/Models/Post')
module.exports=async(req, res)=>{
    
    //const post = await Post.findById(req.params.id)
   const users = await User.findById(req.params.id)
   console.log(User)
   res.render('secondpage',{users:users})
   console.log(users)
    //res.render('firstpage',{name: post})
}