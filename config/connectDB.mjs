import mongoose from "mongoose";

export function connectDB() {
  mongoose
    .connect("mongodb://localhost:27017/quoc100672")
    .then(() => console.log("Connected!"));
}
