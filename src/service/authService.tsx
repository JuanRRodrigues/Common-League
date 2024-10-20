import ApiService from "../apiService";
import { FormikHelpers } from "formik";
import axios from "axios";

interface User {
  login: string;
  id: string;
  [key: string]: any; 
}

interface FormValues {
  login: string;
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
}

interface FormValuesLogin {
  login: string;
  password: string;

}


class AuthService extends ApiService {
  constructor() {
    super('auth');
  }

  findByLogin(login: string): Promise<any> {
    return this.get(`/${login}`);
  }

  async logar(values: FormValuesLogin, actions: FormikHelpers<FormValuesLogin>): Promise<any> {
    try {
      const response = await this.post(`/login`, values);
      sessionStorage.removeItem('token');
      sessionStorage.setItem('token', response.data.token);
      localStorage.setItem('login', values.login);
      console.log(response.data);
      actions.resetForm();
      return response.data;
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  }

  async registrar(values: FormValues, actions: FormikHelpers<FormValues>): Promise<any> {
    try {
      const response = await this.post(`/register`, values);
      console.log(response.data);
      actions.resetForm();
      return response.data;
    } catch (error) {
      console.error('Error', error);
      throw error;
    }
  }

  update(user: User): Promise<any> {
    return this.put(`/${user.id}`, user);
  }

  consult(): Promise<any> {
    return this.get('/list');
  }

  remove(id: string): Promise<any> { 
    return this.delete(`/${id}`);
  }

  async getCurrentUser(): Promise<any> { 
    return await this.get('/current-user');
  }

  
}

export default AuthService;
