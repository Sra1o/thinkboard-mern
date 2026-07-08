// d2ED1W8nIfXLhZbW
//mongodb+srv://sravanstudentche23_db_user:d2ED1W8nIfXLhZbW@cluster0.ewfvnbh.mongodb.net/?appName=Cluster0

import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully.");
    } catch(error) {
        console.error("Error connecting to MongoDB.", error);
        process.exit(1);
    }
}