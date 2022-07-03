import { GithubRepositoryInterface } from '@/interfaces/GithubRepository'
import { AxiosResponse } from 'axios'
import { GenericService } from './genericService'

class GithubService extends GenericService {
  constructor() {
    super('/users/sluucke')
  }
  async getAllRepositories(): Promise<
    AxiosResponse<GithubRepositoryInterface[]>
  > {
    return await this.http.get<GithubRepositoryInterface[]>('/repos')
  }
}

export default new GithubService()
