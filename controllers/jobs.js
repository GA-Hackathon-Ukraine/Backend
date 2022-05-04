import { Job } from "../models/job.js";

function show(req, res) {
  Job.findById(req.params.id).then((job) => {
    res.status(201).json(job);
  });
}

function create(req, res) {
  Job.create(req.body).then(job => {
    res.json({
        status: 200,
        msg: job
    })
})
  // Job.create(req.body)
  //   .then((job) => {
  //     res.json(job);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
}

function index(req, res) {
  console.log("INDEX", req.body);
  Job.find({})
    // .populate()
    .then((job) => {
      res.json(job);
    })
    .catch((err) => {
      res.json(err);
    });
    console.log("INDEXEND", req.body);
}

function edit(req, res) {
  Job.findByIdAndUpdate(req.params.id, req.body)
    .then((job) => res.json(job))
    .catch((err) => {
      res.status(500).json(err);
    });
}

function deleteJob(req, res) {
  Job.findByIdAndDelete(req.params.id)
    .then((deletedJob) => {
      res.json(deletedJob);
    })
    .catch((err) => {
      res.json(err);
    });
}

//export
export { index, show, create, edit, deleteJob as delete };
