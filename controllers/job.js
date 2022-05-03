import { Job } from '../models/job.js'

function index(req, res) {
    Job.find({})
    .populate()
    .then((jobs)=> {
        res.json(jobs)
    })
}

function show(req, res) {
    Job.findById(req.params.id).then((job) =>{
        res.status(201).json(job)
    })
}



//export
export{index, show};