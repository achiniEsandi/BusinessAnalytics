const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI || process.env.MONGODB_URI === 'your_mongodb_atlas_connection_string_here') {
      console.warn('⚠️  MongoDB URI not configured. Set MONGODB_URI in server/.env');
      console.warn('⚠️  Server running without database connection.');
      return;
    }
    // Mask only the password for security in logs
    const maskedURI = process.env.MONGODB_URI.replace(/\/\/(.*?):(.*?)@/, '//$1:****@');
    console.log(`📡 Attempting to connect to: ${maskedURI}`);
    
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.warn('⚠️  Server will continue running without database.');
  }
};

module.exports = connectDB;
