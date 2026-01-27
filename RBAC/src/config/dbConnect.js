const moongoose = require('mongoose');

const dbConnect = async () => {
  try{
    const connect = await moongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database connected: ${connect.connection.host} , ${connect.connection.name}`);
  }
  catch(err){
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = dbConnect;