import express from 'express';
import { indexPage, stockPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/stock', stockPage);

export default indexRouter;
