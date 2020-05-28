import express from "express";
import BaseController from "../utils/BaseController";
import { goodsService } from "../services/GoodsService";

export class GoodsController extends BaseController {
    constructor() {
        super("api/goods");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(_, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {

        } catch (error) {
            next(error);
        }
    }
}
