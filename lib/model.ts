import mongoose from "mongoose";

export type Product = {
  _id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
};
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: String, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);
const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;
