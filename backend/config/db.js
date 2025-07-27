import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
console.log("connect sir ji");
    }catch(error){
        console.error("DB error")

    }
}
export default connectDB;