import express from 'express';
import { indexPage, stockPage, productsPage, addProduct } from '../controllers';
import { modifyProduct } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/stock', stockPage);
indexRouter.get('/products', productsPage);
indexRouter.post('/products', modifyProduct, addProduct);

export default indexRouter;
