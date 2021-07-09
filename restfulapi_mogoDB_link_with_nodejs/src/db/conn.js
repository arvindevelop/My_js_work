const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api", {

    //below 3 statements are written for escaping from deprecation error
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection");
})

