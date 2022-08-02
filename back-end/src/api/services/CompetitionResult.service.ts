/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import { CompetitionResult, competitionResultSchema } from '../interfaces/competitionResult.interface';
import Service, { ServiceError } from './Base.service';
import Competition from '../models/Competitions.model';
import CompetitionResults from '../models/CompetitionResults.model';

class CompetitionService extends Service<CompetitionResult> {
  constructor(model = CompetitionResults) {
    super(model);
  }

  public async create(obj: CompetitionResult): Promise<CompetitionResult | ServiceError | false | null | any> {
    const parsed = competitionResultSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    const competitionFinish = await Competition.findOne({ where: { competition_name: obj.competition_name } });

    if (!competitionFinish) return { error: 'Competition not created' };

    if (competitionFinish.dataValues.in_progress === false) {
      return false;
    }

    const competitionResultExists = await this.model.findOne({ where: { competition_name: obj.competition_name } });

    if (competitionResultExists) {
      return null;
    }

    return this.model.create(obj);
  }

  public async update(
    id: string,
    obj: CompetitionResult,
  ): Promise<CompetitionResult | ServiceError | null> {
    const parsed = competitionResultSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    return this.model.update(id, obj);
  }
}

export default CompetitionService;
