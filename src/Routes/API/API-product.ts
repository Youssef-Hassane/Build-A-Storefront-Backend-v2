import theExpressModule from 'express';
import theProductHandler from '../../Handler-Folder/productHandler';
import AUTH from '../../Middleware/auth';

// Initialize Express/Router in order to be utilized in the src/api/index.ts file
const routes: theExpressModule.Router = theExpressModule.Router();

routes.post('/add', AUTH, theProductHandler.CREATE_PRODUCT);
routes.get('/show-All-Product', AUTH, theProductHandler.SHOW_ALL_PRODUCT);
routes.get(
    '/show-Product/:ID',
    AUTH,
    theProductHandler.SHOW_SPECIFIC_PRODUCT_BY_ID
);
routes.patch('/update/:ID', AUTH, theProductHandler.UPDATE_SPECIFIC_PRODUCT_ID);
routes.delete(
    '/delete/:ID',
    AUTH,
    theProductHandler.DELETE_SPECIFIC_PRODUCT_BY_ID
);

export default routes;
