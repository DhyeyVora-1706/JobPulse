// Please don't change the pre-written code
import mongoose from "mongoose";
import { userSchema } from "../user/user.schema.js";
import { customErrorHandler } from "../../middlewares/errorHandler.js";
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";
import { ObjectId } from "mongoose";

const JobModel = mongoose.model('Job',jobSchema);
const jobApplicantsmodel = mongoose.model('Jobapplicant',applyJobSchema);

export const createNewJob = async (job,userInfo) => {
    if(userInfo.type == "recruiter"){
      const newJob = new JobModel(job);
      await newJob.save();
      return newJob;
    }else{
      throw new Error('sorry! only recruiter is allowed to post jobs!.');
    }
};

export const applyJobRepo = async (jobId, userId) => {

  const job = await JobModel.findById(jobId);

  if(job.applicants.find(element => element == userId)){
    return;
  }
  
   const newApplicant = new jobApplicantsmodel({
    jobId,
    userId
   });
   await newApplicant.save(newApplicant);

   job.applicants.push(userId);
   await job.save();
   return job;
};
export const findJobRepo = async (_id) => {
  const jobDetails = await JobModel.findById(_id);
  return jobDetails;
};
