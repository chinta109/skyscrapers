const Post = require('../Database/Models/Post')
module.exports=async(req, res)=>{
    const databaseposts = await Post.find({})
    res.render('index',{ posts: databaseposts})
}