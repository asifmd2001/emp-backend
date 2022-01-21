import mongoose from "mongoose";

const empSchema = mongoose.Schema({
  
  firstName : String,
  surName : String,
//   id : {
//     type: Number,
//     default: 1814101
//  },
  email : String,
  dob : Date,  
  gender : String
})

const empDetail = mongoose.model("empDetail" , empSchema);

export default empDetail;