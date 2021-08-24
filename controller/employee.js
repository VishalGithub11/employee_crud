const Emp = require("../models/employee");

exports.getAllEmployee = (req, res) => {
  Emp.find().exec((err, empls) => {
    if (err || !empls) {
      return res.status(400).json({
        err: "No Employee",
      });
    }
    res.json(empls);
  });
};

exports.createEmp = (req, res) => {
  const emp = new Emp(req.body);
  emp.save((error, empl) => {
    if (error) {
      return res.status(400).json({
        error: "Not able to save in db",
      });
    }

    res.json({
      name: empl.name,
      email: empl.email,
      age: empl.age,
      id: empl._id,
    });
  });
};

exports.updateEmpl = (req, res) => {
  const id = req.params.id;
  const update = req.body;
  const options = { new: true };
  Emp.findByIdAndUpdate(id, update, options, (err, doc) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save in db",
      });
    }
    res.json({
      name: doc.name,
      email: doc.email,
      age: doc.age,
      id: doc._id,
    });
  });
};

exports.deleteEmp = (req, res) => {
  Emp.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
