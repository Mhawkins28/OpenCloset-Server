const mongoose = require("mongoose");


//**BEFORE DEPLOYMENT FIX THE URL SO THAT IT ONLY SHOWS IN ENV//DELETE BEFORE COMMIT TO MAINTAIN SECURITY

mongoose 
.connect /*URL HERE*/, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((instance) => {
    console.log(`connected on ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`Got an error see details, ${err}`));