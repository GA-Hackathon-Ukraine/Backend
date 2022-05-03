import mongoose from 'mongoose'

const db = mongoose.connection

mongoose.connect(process.env.DATABASE_URL)
// mongoose.connect("mongodb://127.0.0.1:27017/ga_hackathon_ukraine");

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})
