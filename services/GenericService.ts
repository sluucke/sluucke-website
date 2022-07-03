import axios, { AxiosInstance } from 'axios'


/**
 * This is an generic service used for all other services needs axios.
 * ```ts
 * class MyService extends GenericService {
 *  constructor() {
 *    super('relativePath')
 *  }
 *  async fetchAllUsers() {
 *    this.http.get(...)
 *  }
 * }
 * ```
 */
export class GenericService {
  protected readonly http: AxiosInstance
  constructor(relativePath: string = '') {
    const baseURL = `https://api.github.com${relativePath}`
    this.http = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept',
      },
    })
  }
}

//https://api.github.com/users/sluucke/repos
