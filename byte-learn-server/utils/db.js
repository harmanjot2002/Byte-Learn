const mongoose=require('mongoose');

const URI="mongodb+srv://Harman:Harman@cluster0.7zlcmek.mongodb.net/bytelearn";


const connectDb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    }catch(error){
        console.error("DB connection failed");
        process.exit(0);
    }
}

module.exports=connectDb;