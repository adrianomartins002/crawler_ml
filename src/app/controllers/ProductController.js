import ProductService from '../services/ProductService';
import Logger from '../../Logger';
import * as Yup from 'yup';

/**
 * Controller de produto para tratamente de informações relacionadas
 * ao mesmo.
 */
class ProductController {
  /**
   * Função de retorno de dados de produto
   */
  async index(req, res) {
    const logger = new Logger('product/index')
    let error = {}

    const schema = Yup.object().shape({
      search: Yup.string().required(),
      int: Yup.number().required(),
    });
    try {
      logger.setLogData(req.body)

      if (!(await schema.isValid(req.body))) {
        logger.error('Parametros inválidos');
        error['params'] = 'invalid parameters';
        return res.status(400).json({
          error: 'Validation fails',
          message: 'Verifique se os parametros necessários estão corretos.'
        })
      }


      const { search, int } = req.body
      const productList = await ProductService.returnProducts(search, int);

      if (!productList || productList.length <= 0) {
        logger.error('Sem resultados para a busca com os seguintes filtros: search - ' + search + ' , int - ' + int);

      }

      return res.status(200).json(productList)

    } catch (err) {
      logger.error('Houve um problema! - ' + err.message);
      return res.status(500).json({ message: err.message })
    }
  }
}

export default new ProductController();