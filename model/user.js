const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    id:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("User",userSchema)