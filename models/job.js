import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, ref: "id"},
    city: {type: String, required: true},
    state: {type: String, required: true},
    company: {type: String, required: true},
    position: {type: String, required: true},
    full_time: String,
    contact: {type: String, required: true},
    description: String,
    schedule: String,
    address: String,
    industry: String,
    url: String,
    compensation: String,
}, {timestamps: true})


//export statement
const Job = mongoose.model('Job', jobSchema);


export { Job };