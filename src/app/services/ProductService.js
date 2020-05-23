import puppeteer from 'puppeteer';
/**
 * Classe responsável pelo tratamento e busca dos produtos
 */
class ProductSearchService {

  /**
   * @search string com a descrição de busca do produto
   * @int limite de itens a retornar
   */
  returnProducts = async (search, int) => {

    if (!search || search == '' || !int || int <= 0) {
      throw new Error();
    }

    // instancia a página
    const browser = await puppeteer.launch({
      headless: true,
      args: [`--no-sandbox`, `--disable-setuid-sandbox`],
    });
    const page = await browser.newPage();
    // carrega o site
    await page.goto('https://www.mercadolivre.com.br/');

    // faz a pesquisa
    await page.type('.nav-search-input', search, { delay: 100 });
    await page.click('button[type="submit"]');
    await page.waitFor('.nav-search-input')

    let productList = []
    // itera sobre os itens, enquanto o botão de próximo existir
    while (await page.$('.andes-pagination__button--next')) {
      await page.waitFor('.results-item');
      const items = await page.$$('.results-item');

      for (let item of items) {
        let linkPromise = this.getTextValueOfProperty(item, '.item__info-link', 'href');
        let namePromise = this.getTextValueOfProperty(item, '.main-title', 'textContent');

        let divStore = await item.$('.item__brand-title-tos');
        let storePromise;
        if (divStore) {
          storePromise = this.getTextValueOfProperty(divStore, 'span', 'textContent');
        }

        let stateProp = await item.$('.item__condition');
        let statePromise;
        if (stateProp)
          statePromise = this.getTextValueOfProperty(item, '.item__condition', 'textContent');

        let priceFractionPromise = this.getTextValueOfProperty(item, '.price__fraction', 'textContent');
        let priceDecimalsPromise = this.getTextValueOfProperty(item, '.price__decimals', 'textContent');

        // montagem do objeto
        const [name, link, state, store, priceFraction, priceDecimal] = await Promise.all([
          namePromise, linkPromise, statePromise, storePromise,
          priceFractionPromise, priceDecimalsPromise
        ])

        let price = Number(priceFraction + (priceDecimal ? '.' + priceDecimal : ''));

        let product = { name, link, price, store, state };
        // montando a lista de produtos
        productList.push(product)
        // finalizando o laço caso atinja o limite de produtos a buscar
        if (productList.length === int)
          break;
      }
      // finalizando o laço caso atinja o limite de produtos a buscar
      if (productList.length === int)
        break;

      await (await botaoProximo.$('a')).click();
      await page.waitFor('.nav-search-input')
    }
    page.close();
    return productList
  }

  /**
   * Função de retorno da busca de conteúdo dentro de um elemento html
   * @param item item de busca do puppteer
   * @param containerProperty div, tag ou elemento html que quer recuperar os
   * dados de uma propriedade
   * @param property propriedade de uma tag ou componente html
   */
  getTextValueOfProperty = async (item, containerProperty, property) => {
    let prop = await item.$(containerProperty);
    if (prop)
      prop = await (await prop.getProperty(property)).jsonValue()

    return prop;
  }
}

export default new ProductSearchService();