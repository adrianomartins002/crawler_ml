import ProductService from '../../src/app/services/ProductService'

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
})