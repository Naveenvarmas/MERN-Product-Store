import mongoose from "mongoose";

export const connectDB= async () =>{
  try {
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`MonogoDB connected : ${conn.connection.host}`);
    
  } catch (error) {
    console.error(`error :${error.message}`);
    process.exit(1); // process code 1 code means exit with failure , o means success
    
  }
}