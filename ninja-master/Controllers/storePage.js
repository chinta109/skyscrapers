const Post = require('../Database/Models/Post')

module.exports=async(req, res)=>{

    Post.create(req.body,(error,post)=>{
        res.redirect('/index')
    })
}