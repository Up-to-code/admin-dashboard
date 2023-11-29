import mongoose from "mongoose";

export default async function DBconacet() {
    try {
        await mongoose.connect(process.env.MONGO_DB!)
    } catch (error) {
        console.log(error)
    }
}