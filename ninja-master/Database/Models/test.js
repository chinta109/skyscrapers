const mongoose = require('mongoose')

const Post = require('./Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

Post.create({
    
    title : 'My third Blog post',
    description: 'third Blog post Description',
    content: 'Vamshi this is your third data insertion'

},(error, Post) =>{console.log(error,Post)})


// Post.find({
//     title: 'My Second Blog post'
// },(error,post)=>{console.log(error,post)}
// )
