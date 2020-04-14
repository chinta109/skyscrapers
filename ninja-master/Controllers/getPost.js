const Post = require('../Database/Models/Post')

module.exports=async(req, res)=>{
    const post = await Post.findById(req.params.id)
    console.log(post)
    res.render('post',{post: post})
    console.log(post)
}