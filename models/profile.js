import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    name: String,
    // job: [{type: mongoose.Schema.Types.ObjectId, ref: "Job"}],
    job: [],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}

