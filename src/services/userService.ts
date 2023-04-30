import api from './api';

class ProductService {
  async getAllUsers(): Promise<any> {
    const response = await api.get(`/users`);

    return response.data;
  }

  async addBalanceInUser({
    userId,
    value,
    description,
  }: {
    userId: string;
    value: number;
    description: string;
  }): Promise<any> {
    const response = await api.patch(`/users/balance/add`, {
      userId,
      value,
      description,
    });

    return response.data;
  }
}

export default new ProductService();
