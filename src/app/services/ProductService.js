class ProductService {
  index = async () => {
    return { message: "server is online!" };
  }
}

export default new ProductService();