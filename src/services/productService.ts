import api from './api';

class ProductService {
  async getAllProducts(): Promise<any> {
    const response = await api.get(`/products`);

    return response.data;
  }
}

export default new ProductService();
