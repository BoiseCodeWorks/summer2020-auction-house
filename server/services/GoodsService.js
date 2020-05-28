import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GoodsService {
    async find(query = {}) {
        return await dbContext.Good.find(query)
    }
    async findById(id) {
        let data = await dbContext.Good.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async create(body) {
        return await dbContext.Good.create(body)
    }
    async edit(update) {
        let data = await dbContext.Good.findByIdAndUpdate(update.id, update, { new: true, runValidators: true })
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }
    async delete(id) {
        let data = await dbContext.Good.findByIdAndDelete(id)
        if (!data) {
            throw new BadRequest("Invalid Id")
        }
        return data
    }

}

export const goodsService = new GoodsService();