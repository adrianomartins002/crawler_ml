import ProductService from '../services/ProductService';
import httpStatus from '../utils/status-code';
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
    const logger = req.logger;
    logger.setRoute('/product/index')
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
        return res.status(httpStatus.BAD_REQUEST).json({
          error: 'Validation fails',
          message: 'Verifique se os parametros necessários estão corretos.'
        })
      }


      const { search, int } = req.body
      const productList = await ProductService.returnProducts(search, int);

      if (!productList || productList.length <= 0) {
        logger.error('Sem resultados para a busca com os seguintes filtros: search - ' + search + ' , int - ' + int);
        return res.status(httpStatus.NOT_FOUND).json({ message: 'Não foram encontrados resultados para essa pesquisa' })
      }

      return res.status(httpStatus.SUCESS).json(productList)

    } catch (err) {
      logger.error('Houve um problema! - ' + err.message);
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message })
    }
  }
}

export default new ProductController();