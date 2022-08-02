/* eslint-disable max-len */
import CompetitionResults from '../models/CompetitionResults.model';

class RankingService {
  public model = CompetitionResults;

  public async findAll() {
    const ranking = await this.model.findAll();

    if (!ranking) {
      return null;
    }

    return ranking;
  }
}

export default RankingService;
