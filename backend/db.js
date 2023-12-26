const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/iNotebook"

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDB Successfully")
    })
}

module.exports = connectToMongo