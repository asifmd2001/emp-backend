import empDetail from '../models/empDetail.js';
// import empDetails from '../models/empDetail.js';

export const getEmp = async (req, res) => {
  // res.send('check get');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  try {
    const empDetails = await empDetail.find();

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
  // res.setHeader('Access-Control-Allow-Origin', 'Content-Type');
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
