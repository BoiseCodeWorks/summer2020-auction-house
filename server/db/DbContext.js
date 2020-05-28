import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import Good from "../models/Good";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Good = mongoose.model("Good", Good);
}

export const dbContext = new DbContext();
