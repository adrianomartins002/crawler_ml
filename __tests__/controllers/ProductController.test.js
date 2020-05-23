import ProductController from "../../src/app/controllers/ProductController"
import { mockRequest, mockResponse } from '../utils/interceptors';

describe('ProductController', () => {
  beforeEach(() => {
    // depende da internet
    jest.setTimeout(30000);
  });
  describe('Index', () => {
    it('Case pass invalid params', async () => {
      let req = mockRequest();
      req.body = null;
      const res = mockResponse();

      await ProductController.index(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
    })
    it('Case pass valid params', async () => {
      let req = mockRequest();
      req.body = { search: "cadeado", int: 10 };
      const res = mockResponse();

      await ProductController.index(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    })
  })
})