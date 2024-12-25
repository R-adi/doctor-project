import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

const db = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('MongoDB connected successfully');
    } 
    catch (err) {
      console.error('Failed to connect to MongoDB:', err.message);
    
    }
  };

export default db