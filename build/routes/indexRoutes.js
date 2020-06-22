"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const localesController_1 = __importDefault(require("../controllers/localesController"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', localesController_1.default.locales);
        this.router.post('/', localesController_1.default.rentar);
        this.router.post('/', localesController_1.default.subirImagen);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
