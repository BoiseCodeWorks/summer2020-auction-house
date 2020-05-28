import mongoose from "mongoose";
import Good from "../models/Good";

class DbContext {
  Good = mongoose.model("Good", Good);
}

export const dbContext = new DbContext();
