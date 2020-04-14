const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema ({

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


/*model hook*/
UserSchema.pre('save', function(next){
    /*user is available in **this** variable */
    const user = this
    bcrypt.hash(user.password,10,function(error, encrypted){
    user.password = encrypted
    next()
})
})
const User = mongoose.model('User',UserSchema)
module.exports = User