import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class BidsService {
    async find(query = {}) {
        return await dbContext.Bid.find(query)
    }
    async findById(id) {
        let data = await dbContext.Bid.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async create(body) {
        return await dbContext.Bid.create(body)
    }

}

export const bidsService = new BidsService();