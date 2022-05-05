import { Profile } from "../models/profile.js";
import { User } from '../models/user.js';
import { Job } from '../models/job.js';

function index(req, res) {
  Profile.find({})
    .then((profiles) => res.json(profiles))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function saveJob(req, res) {
  //locate user id
  console.log("UserID: ", req.body.userID)
  const user = Profile.find(req.body.userID)
  console.log("User is: ", user)
  //locate job id
  const job = Job.find(req.body.jobID)
  console.log("Job is: ", job)
  //add job to user's profile array
  user.job.push(job)
  //user.job.push(req.body.id)
  //save data
  user.save();
  //return statement
  res.json({status: 200, data: user.profile})
}

export { index, saveJob };


// Job.findByIdAndUpdate(req.params.id, req.body)
//     .then((job) => res.json(job))
//     .catch((err) => {
//       res.status(500).json(err);
//     });
