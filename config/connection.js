// Import Mongoose
import mongoose from "mongoose";

// Connect to MongoDB Atlas
function connectDB() {
    const uri = process.env.MONGO_URI;

    return mongoose.connect(uri)
        .then(() => {
            console.log("Successfully connected to MongoDB!");
        })
        .catch((err) => {
            console.log("Connection Error:", err.message);
            process.exit(1);
        });
}

// Export the database connection
export default connectDB;