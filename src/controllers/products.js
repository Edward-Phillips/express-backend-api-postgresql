import Model fromn '../models/model';

const productsModel = new Model('products');
export const productsPage = async (req, res) => {
  try {
    const data = await productsModel.select('product_name, price, cutting_type');
    res.status(200).json({ products: data.rows });
  } catch (err) {
    res.status(200).json({ products: err.stack });
  }
};
