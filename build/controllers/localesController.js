"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LocalesController {
    locales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT l.*, r.compania, r.imagen, r.descripcion AS descripcion_compania FROM `locales` AS l LEFT JOIN rentar AS r ON l.id = r.id_local')
                .then(results => {
                res.json({
                    ok: true,
                    locales: results
                });
            });
        });
    }
    subirImagen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    rentar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            yield database_1.default.query('INSERT INTO rentar set ?', [body]);
            // await pool.query('UPDATE locales SET ? WHERE id = ', body.id_local);
            // let transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //       user: 'juanc.tellez@gmail.com',
            //       pass: '123456'
            //     }
            // });
            // let mailOptions = {
            //     from: 'juanc.tellez@gmail.com',
            //     to: 'myfriend@yahoo.com',
            //     subject: 'Registro recibido',
            //     text: 'Tu registro se ha realizado con éxito!'
            // };
            // transporter.sendMail(mailOptions, function(error, info){
            //     if (error) {
            //       console.log(error);
            //     } else {
            //       console.log('Email sent: ' + info.response);
            //     }
            // });
            res.json({
                ok: true,
                message: 'Se rentó el local con éxito'
            });
        });
    }
}
const localesController = new LocalesController();
exports.default = localesController;
