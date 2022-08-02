/* eslint-disable max-len */
import { Competition, competitionSchema } from '../interfaces/competition.interface';
import Service, { ServiceError } from './Base.service';
import CompetitionModel from '../models/Competitions.model';

class CompetitionService extends Service<Competition> {
  constructor(model = CompetitionModel) {
    super(model);
  }

  public async create(obj: Competition): Promise<Competition | ServiceError | null> {
    const parsed = competitionSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    const competitionExists = await this.model.findOne({ where: { competition_name: obj.competition_name } });

    if (competitionExists) {
      return null;
    }

    return this.model.create(obj);
  }

  public async update(
    id: string,
    obj: Competition,
  ): Promise<Competition | ServiceError | null> {
    const parsed = competitionSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    await this.model.update({ in_progress: false }, { where: { id } });

    return this.model.findByPk(id);
  }
}

export default CompetitionService;
