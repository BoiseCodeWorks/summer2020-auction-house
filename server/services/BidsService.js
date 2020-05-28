import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BidsService {
    async find(query = {}) {
        return await dbContext.Bid.find(query)
    }
    async findById(id) {
        let data = await dbContext.Bid.findById(id).populate("goodId");
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async create(bid) {
        let good = await dbContext.Good.findById(bid.goodId)
        // @ts-ignore
        if (!good || bid.price - good.price < 1) {
            throw new BadRequest("Invalid Bid")
        }
        // @ts-ignore
        good.price = bid.price
        await good.save();
        return await dbContext.Bid.create(bid)
    }

}

export const bidsService = new BidsService();