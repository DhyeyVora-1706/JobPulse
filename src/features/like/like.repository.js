// Please don't change the pre-written code
import mongoose,{ObjectId} from "mongoose";
import { likeSchema } from "./like.schema.js";

const likeModel = mongoose.model('Like',likeSchema);

export const likeRepo = async (user_id, job_id, model) => {

    const newLike = new likeModel({
      user : user_id,
      likeable : job_id,
      on_model : model
    });
    await newLike.save();
    return newLike;
};

export const getLikesRepo = async (id, on_model) => {
   let likeInfo = await likeModel.find({
      likeable : id,
      on_model : on_model
   }).populate('user').populate({path:"likeable",model:on_model});

   return likeInfo;
};
