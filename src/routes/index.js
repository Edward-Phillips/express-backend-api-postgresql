import express from 'express';
import { indexPage, stockPage, productsPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/stock', stockPage);
indexRouter.get('/products', productsPage);

export default indexRouter;
