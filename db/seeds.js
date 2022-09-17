require("./connection");
require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require("../models/User");
const Item = require('../models/Item');
const Look = require('../models/Look');
const Inspo = require('../models/Inspo');

const items = [
  {
    name: 'Thrfted Flannel',
    category: 'Tops',
    photo:'https://cdn.shopify.com/s/files/1/0556/1841/products/Scar_Mens_18.08.22347_670x.jpg?v=1662461123',
    notes: "great find. I will probably wear it a lot this fall"
  },
  {
    name: 'Zara Blazer',
    category: 'Outerwear',
    photo:'https://static.zara.net/photos///2021/I/0/1/p/8215/760/800/2/w/563/8215760800_6_1_1.jpg?ts=1627025028118',
    notes: "",
  },
]

const looks = [
  {
    category: "Work",
    items: [],
    notes: "test outfit 1",
    name: 'Test 1' 
  },
  {
    category: "Night",
    items: [],
    notes: "test outfit 2",
    name: 'Test 2' 
  },
]

const inspos = [
  {
    photo: "https://cdn.inkistyle.com/wp-content/uploads/2022/03/STRAY-KIDS-Maniac-MV-Fashion-Hyunjin-Look-2.jpg",
    title:"SKZ Hyunjin's 2nd look from Manic M/V",
    notes: "fun, mostly black look... "
  },
  {
    photo: "https://i.pinimg.com/564x/68/9e/1a/689e1a293bc9b64255975ba12e27dd53.jpg",
    title: "dark acadamia vibes",
    notes: "test "
  },
]

  User.deleteMany({})
  .then(()=>{
    User.insertMany([{ name: 'Megan', username: 'MTest', password: "123"}])
  })
.then(() => {
  Item.deleteMany({})
  .then( () => {
      return Item.insertMany(items)
  })
})
.then(() => {
  Look.deleteMany({})
    .then( () => {
      return Look.insertMany(looks)
  })
})
.then(() => {
  Inspo.deleteMany({})
    .then( () => {
      return Inspo.insertMany(inspos)
  })
  .catch(err => console.error(err))
  .finally(()=>{
      process.exit()
    })
  })

