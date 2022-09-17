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
  {
    name: 'Everlane Linen Pant',
    category: 'Bottoms',
    photo:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPnRnod8WH3NmJMhmZMC_OjQ-1fq36Wqr7lIFmGRF4YtcOUrG5-cD9PP2WaeKvw_05FX0HGgOY2LzL3QXgEW-2s6fLz4vSEltnrx--VuzcBB7LTBrRclLLzg&usqp=CAc',
    notes: "so comfy! and cute!",
  },
  {
    name: 'Adidas Classic',
    category: 'Shoes',
    photo:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSAbpsrn52ZhKBI4ffMHZUhNBYbmcyv1G3VkmpD_yh_H8_4a6jKRuxSr2OzhIP6zEeSTSDGdGi1&usqp=CAc',
    notes: "my go-tos",
  },
  
]

const looks = [
  {
    category: "Work",
    items: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYVglYnGFagvGrkEH5BJ-UNS-D4WNPxv2nXQm8inR58DXMQQLm6ukyR7mb-_cSA2vs_8lFRSw6YQ&usqp=CAc",
    notes: "test outfit 1",
    name: 'Test 1' 
  },
  {
    category: "Night",
    items: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNkTMIglyWAMgHKOnapZ25W6kRzk2tQe3vJAkZaEIa3Hvd2BIcm2ceL1N4ZCFZtgqwEcfbI2QhfOBudzuULw864YCW9K9xxvrXvQ0pvd5JRoDnpu9HPjWk9g&usqp=CAc",
    notes: "test outfit 2",
    name: 'Test 2' 
  },
  {
    category: "Festival",
    items: "https://krrenee.files.wordpress.com/2020/01/4339d55c-9e51-4db6-a854-f199e3a3e466.jpg",
    notes: "For EDC. May alter it a bit since it will get cold!",
    name: 'EDC Day 1' 
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

