const server = require(".");
const { connectDb } = require("./db.js");

const PORT=8000;

server.listen(PORT,async()=>{
    try{
        await connectDb();
    }
    catch(error){
      console.log(error);
    }
    console.log("Server is listening at PORT :",PORT);
})