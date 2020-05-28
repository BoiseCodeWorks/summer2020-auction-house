import express from "express";
import BaseController from "../utils/BaseController";
import { goodsService } from "../services/GoodsService";

export class GoodsController extends BaseController {
    constructor() {
        super("api/goods");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }
    async getAll(req, res, next) {
        try {
            let data = await goodsService.find(req.query);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            let data = await goodsService.findById(req.params.id);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await goodsService.create(req.body);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async edit(req, res, next) {
        try {
            req.body.id = req.params.id
            let data = await goodsService.edit(req.body);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async delete(req, res, next) {
        try {
            let data = await goodsService.delete(req.params.id);
            return res.send("Delorted")
        } catch (error) {
            next(error);
        }
    }
}
