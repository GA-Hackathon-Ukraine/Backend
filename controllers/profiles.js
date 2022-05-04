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
  const user = User.findbyId(req.params.authorID)
  console.log("User is: ", user )
  //locate job id
  const job = Job.findbyId(req.params.jobID)
  console.log("Job is: ", job)
  //add job to user's profile array
  user.profile.push(job)
  //save data
  user.save();
  //return statement
  res.json({status: 200, data: user.profile})
}

export { index, saveJob };
