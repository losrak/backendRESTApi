import { Router } from 'express';
import localesController from '../controllers/localesController';


class IndexRoutes{

    public router: Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    config(): void{
        this.router.get('/', localesController.locales);
        this.router.post('/', localesController.rentar);
        this.router.post('/', localesController.subirImagen);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
