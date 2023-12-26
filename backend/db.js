const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://Saransh214:Saransh214@inotebook.nsbhyn2.mongodb.net/"

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }
  
  module.exports = connectToMongo;