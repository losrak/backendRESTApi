import {Request, Response} from 'express';
import { createConnection } from 'promise-mysql';

import  pool  from '../database';

import nodemailer from 'nodemailer';


class LocalesController {

    public async locales(req: Request, res: Response){
        
        await pool.query('SELECT l.*, r.compania, r.imagen, r.descripcion AS descripcion_compania FROM `locales` AS l LEFT JOIN rentar AS r ON l.id = r.id_local')
            .then( results => {
                res.json({
                    ok: true,
                    locales: results
            });
        })   
    }

    public async subirImagen(req: Request, res: Response){
        
    }

    public  async rentar(req: Request, res: Response): Promise<void>{
        let body = req.body;
        await pool.query('INSERT INTO rentar set ?', [body]);
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
        
    }
}

 const localesController = new LocalesController();

 export default localesController;

