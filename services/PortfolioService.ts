import { Portfolio } from "../interfaces/Portfolio";
import { PortfolioWorks } from '../mock/portfolio.mock';

class PortfolioService {
  public getAll(): Portfolio[] {
    return PortfolioWorks
  }
  public getBySlug(slug: string): Portfolio {
    return PortfolioWorks.filter(work => work.slug === slug)[0]
  }
}

export default new PortfolioService()