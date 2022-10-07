const mongoose = require("mongoose")




const userSchema = new mongoose.Schema({
    surname: {
        type: String,
        required:true,
        
    },
    
    lastname: {
        type: String,
        required:true,
        
    },
    age: {
        type: Number,
        required:true,
        
    },
    username: {
        type: String,
        required:true,
        unique: true
    },
    password: {
        type: String,
        required:true,
       
    },
    email: {
        type: String, 
        required:true,
        
        }
})

// userSchema.pre("save",)









const mycolect = mongoose.model("mycolect", userSchema)










module.exports = mycolect


