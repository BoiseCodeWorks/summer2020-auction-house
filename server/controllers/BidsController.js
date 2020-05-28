import express from "express";
import BaseController from "../utils/BaseController";
import { bidsService } from "../services/BidsService";

export class BidsController extends BaseController {
    constructor() {
        super("api/bids");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getById)
            .post("", this.create)
    }
    async getAll(req, res, next) {
        try {
            let data = await bidsService.find(req.query);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            let data = await bidsService.findById(req.params.id);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            let data = await bidsService.create(req.body);
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }
}
