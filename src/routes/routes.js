import addnewProduct from '../controllers/controllers'
export const routes = (app) => {
    app.route('/products');
    app.post(addnewProduct);
    

}