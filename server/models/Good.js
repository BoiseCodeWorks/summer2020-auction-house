import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Good = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true, min: .01 },
        seller: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Good;