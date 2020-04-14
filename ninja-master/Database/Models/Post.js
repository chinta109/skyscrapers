const mongoose = require('mongoose')

 const PostSchema = new mongoose.Schema({
    username: String,
    title: String,
    subtitle : String,
    content: String,
    createdAt: {
       type: Date,
       default: new Date()
    }
 })

 const Post = mongoose.model('Post',PostSchema)

 module.exports = Post