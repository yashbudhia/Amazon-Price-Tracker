import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    url: { type: String, required: true, unique: true },
    currency: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    priceHistory: [
      {
        price: { type: Number, required: true },
        date: { type: Date, required: true },
      },
    ],
    lowestPrice: { type: Number },
    highestPrice: { type: Number },
    averagePrice: { type: Number },
    discountRate: { type: Number },
    description: { type: String },
    category: { type: String },
    reviewsCount: { type: Number },
    isOutofStock: { type: Boolean },
    users: [{ email: { type: String, required: true } }],
    default: [],
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default { Product };
