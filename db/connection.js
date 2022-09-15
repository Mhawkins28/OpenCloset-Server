const mongoose = require("mongoose");


// mongoose 
// .connect (process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
const mongoURI = 'mongodb://localhost:27017/items'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})

  .then((instance) => {
    console.log(`Connected on Mongo ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`Got an error see details, ${err}`));