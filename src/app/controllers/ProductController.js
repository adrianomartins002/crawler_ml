import ProductService from "../services/ProductService"

class ProductController {
  index = async (req, res) => {
    return res.json(await ProductService.index());
  }
}

export default new ProductController();