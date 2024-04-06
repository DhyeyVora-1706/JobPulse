// Please don't change the pre-written code
import mongoose from "mongoose";

export const applyJobSchema = new mongoose.Schema({
  jobId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Job',
    required : true
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
  }
});
