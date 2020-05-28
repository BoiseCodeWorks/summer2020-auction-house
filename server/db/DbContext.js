import mongoose from "mongoose";
import Good from "../models/Good";
import Bid from "../models/Bid";

class DbContext {
  Good = mongoose.model("Good", Good);
  Bid = mongoose.model("Bid", Bid);
}

export const dbContext = new DbContext();
