import ProductService from '../../src/app/services/ProductService'
import puppeteer from 'puppeteer';

describe('ProductService', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });
  afterAll(async done => {
    done();
  });
  describe('index', () => {
    it('when pass all valid data', async () => {
      const result = await ProductService.returnProducts('cadeado', 10);
      expect(result.length).toBe(10);
    })
    it('when pass data invalid', async () => {
      expect(ProductService.returnProducts('', 0)).rejects.
        toEqual(new Error)
    })
  })
  describe('getTextValueOfProperty', () => {
    beforeEach(() => {
      jest.setTimeout(10000);
    })
    it('Quando passar todos os dados validos', async () => {
      const browser = await puppeteer.launch({
        headless: true,
        args: [`--no-sandbox`, `--disable-setuid-sandbox`],
      });
      const page = await browser.newPage();
      await page.goto('https://www.mercadolivre.com.br/');
      const retorno = await ProductService.getTextValueOfProperty(page, '.nav-search-input', 'placeholder');
      expect(retorno).toBe('Buscar produtos, marcas e muito mais…')

    })
    it('Quando passar dados inválidos', async () => {
      const browser = await puppeteer.launch({
        headless: true,
        args: [`--no-sandbox`, `--disable-setuid-sandbox`],
      });
      const page = await browser.newPage();
      await page.goto('https://www.mercadolivre.com.br/');
      expect(ProductService.getTextValueOfProperty(null, '.nav-search-input', 'placeholder')).rejects.toEqual(new Error)
    })
  })
})