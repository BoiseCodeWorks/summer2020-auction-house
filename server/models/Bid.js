import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId

const Bid = new Schema(
    {
        price: { type: Number, required: true, min: .01 },
        name: { type: String, required: true },
        goodId: { type: ObjectId, ref: "Good", required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Bid;