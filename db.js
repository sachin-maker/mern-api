const { default: mongoose } = require("mongoose");

const mongoUrl="mongodb+srv://jhondevil63:2KaP2gUaonWf4xld@cluster0.rm6aldi.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mongoUrl);
}

module.exports={connectDb}