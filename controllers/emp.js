import empDetail from '../models/empDetail.js';
import mongoose from "mongoose";
// import empDetails from '../models/empDetail.js';

export const getEmp = async (req, res) => {
  // res.send('check get');
  
  try {
    const empDetails = await empDetail.find();
    //console.log(empDetails);
    res.status(200).json(empDetails);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createEmp = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const emp = req.body;

  var e = emp.email;
  empDetail.findOne({ email : e }, async function(err, empdetail) {
    if (err) console.log(err);
    if (empdetail) {
      console.log("This has already been saved");
      res.status(409).json("already Saved");
    } else {
      const newEmp = new empDetail(emp);

      try {
        await newEmp.save();

        res.status(201).json(newEmp);
      } catch (error) {
        res.status(409).json(error);
      }
    }
  })
};

export const updateEmp =async (req,res)=>{
   const {id:_id} = req.params;
  const emp = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("NO EMP WITH ID");

  const updatedEmp = await empDetail.findByIdAndUpdate(_id,emp, {new : true});

  res.json(updatedEmp)
}

export const deleteEmp = async(req,res)=>{
   res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  const{id:_id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("NO EMP WITH ID");
  
  await empDetail.findByIdAndRemove(_id);
  console.log("delete");

  res.json("deleted");
}