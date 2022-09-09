const Item = require('../models/Item')

const itemIndex = (req, res) => {
  Item.find({}, (err, items)=>{
      if(err){
          res.status(400).json(err)
          return
      }
      res.json(items)
  })
}

const postItem = async (req, res) => {
  Item.create(req.body, (err, newItem) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    
    res.json(newItem);
  
  });
};

const updateItem = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    Item.find({}, (err, items) => {
      res.json(items);
    });
  });
};

const deleteItem = (req, res) => {
  let { id } = req.params;

  Pin.findByIdAndDelete(id, (err, deletedItem) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(deletedItem);
  });

};


module.exports = {
  itemIndex,
  postItem,
  updateItem,
  deleteItem,
}