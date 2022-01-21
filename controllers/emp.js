import empDetail from '../models/empDetail.js';
import empDetails from '../models/empDetail.js';

export const getEmp = async (req, res) => {
  // res.send('check get');
  try { 
    const empDetails = await empDetails.find();

    res.status(200).json(empDetails);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createEmp = async (req, res) => {
  const emp = req.body;
  const newEmp = new empDetail(emp);

  try {
    await newEmp.save();

    res.status(201).json(newEmp);
  } catch (error) {
    res.status(409).json(error);
  }
};
