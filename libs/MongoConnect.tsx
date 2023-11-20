import mongoose from "mongoose";

/* eslint-disable no-var */

const DB_URI = process.env.MONGODB_URI || "";
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}


// export const connectMongoDB = async (): Promise<mongoose.Connection> => {
//   try {
//     if (mongoose.connection.readyState === 1) {
//       return mongoose.connection;
//     }

//     mongoose.connection.on("connected", () => {
//       console.log("MongoDB connected successfully");
//     });

//     mongoose.connection.on("error", (err) => {
//       console.error(`MongoDB connection error: ${err}`);
//     });

//     mongoose.connection.on("disconnected", () => {
//       console.log("MongoDB disconnected");
//     });

//     await mongoose.connect(process.env.MONGODB_URI!);
//     console.log("MongoDB connected successfully");
//     return mongoose.connection;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// };
export async function connectMongoDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .set({ debug: true, strictQuery: false })
      .connect(`${DB_URI}`)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export const disconnectMongoDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) {
      return await mongoose.disconnect();
    }
  } catch (error) {
    console.log(error);
  }
};
