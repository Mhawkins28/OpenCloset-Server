// const Item = require('../models/Item')
const Look = require('../models/Look')

const lookIndex = (req, res) => {
  Look.find({}, (err, looks)=>{
      if(err){
          res.status(400).json(err)
          return
      }
      res.json(looks)
  })
}

const postLook= async (req, res) => {
  console.log(req.body);
  Look.create(req.body, (err, newLook) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(newLook);
  });
};

const getOneLook = (req, res) => {
  Look.findById(req.params.id, (err, look) =>{
      if(err){
          res.status(400).json(err)
          return
      }

      res.json(look)
  })
}

const updateLook = (req, res) => {
  Look.findByIdAndUpdate(req.params.id, req.body, (err, look) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    Look.find({}, (err, looks) => {
      res.json(looks);
    });
  });
}

const deleteLook = (req, res) => {
  let { id } = req.params;
  Look.findByIdAndDelete(id, (err, deletedLook) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(deletedLook);
  });
}

module.exports = {
  lookIndex,
  postLook,
  updateLook,
  getOneLook,
  deleteLook,
}