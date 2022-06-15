import { GenericService } from "./GenericService";


class LoginService extends GenericService {
  constructor() {
    super("/auth/login");
  }

  public async login(email: string, password: string) {
    return await this.http.post<any>("", { email, password });
  }
}

export default new LoginService();