// Please don't change the pre-written code
import mongoose from "mongoose";

export const likeSchema = new mongoose.Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  likeable : {
    type : mongoose.Schema.Types.ObjectId,
    refPath : "on_model",
    required : true
  },
  on_model : {
    type : String,
    enum : ["User","Job"],
    required : true
  }
});
