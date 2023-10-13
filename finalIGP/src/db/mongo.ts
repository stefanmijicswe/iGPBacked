import mongoose from "mongoose";
import { red, green, blue, cyan } from "kleur";

const connectDB = async () => {
  try {
    // Ensure MONGO_URI is available
    if (!process.env.MONGO_URI) {
      console.error(red("MONGO_URI not found in environment variables!"));
      process.exit(1);
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(green(`MongoDB connected: ${conn.connection.host}`));
    
    // Display connection details in a beautiful way
    console.log(blue("Details:"));
    console.log(cyan(`Host: ${conn.connection.host}`));
    console.log(cyan(`Port: ${conn.connection.port}`));
    console.log(cyan(`Database Name: ${conn.connection.name}`));
    
  } catch (error) {
    console.error(red(`Error connecting to MongoDB: ${error.message}`));
    process.exit(1);
  }
};

export { connectDB };
