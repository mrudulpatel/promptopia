import mongoose from "mongoose";

let isConnected = false; // Database connection status

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "promptopia",
    });
    isConnected = true;
    console.log("=> MongoDB connected");
  } catch (error) {}
};
