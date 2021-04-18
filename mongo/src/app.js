const mongoose = require("mongoose");

//create database

//here mydb is database name other thing written is bydefault
mongoose.connect("mongodb://localhost:27017/learn_mongoose" , {
    useNewUrlParser: true , useUnifiedTopology: true
}).then( () => console.log("connection successful...."))
.catch(() => console.log(err));

//create schema for defining structure

const createMongo = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

//create collection using model
const CreateMongo = new mongoose.model("CreateMongo",createMongo);

const createDocument = async () => {
    //for creating the document
    try{
        const reactMongo = new CreateMongo({
            name:"React",
            ctype:"Front end",
            videos:5,
            author:"Arvind",
            active:true,
        })
        
        //now save the document which has created above
        const result = await reactMongo.save();
        console.log(result);

    }
    catch(err){
        console.log(err);
    }

}

createDocument();



