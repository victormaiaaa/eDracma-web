import api from './api';

interface ILogin {
  user: string;
  password: string;
}

class AuthService {
  async login({ user, password }: ILogin): Promise<any> {
    const response = await api.post(`/auth`, {
      user,
      password,
    });

    return response.data;
  }
}

export default new AuthService();
