import { Post } from "../interfaces/Post";
import { GenericService } from "./GenericService";

class PostsService extends GenericService {
  constructor() {
    super("/posts");
  }

  public async getAll() {
    return await this.http.get<Post[]>("");
  }

  public async getById(id: number) {
    return await this.http.get<Post>(`/${id}`);
  }
}

export default new PostsService();
