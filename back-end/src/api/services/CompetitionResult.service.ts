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

    return this.model.update(id, obj);
  }
}

export default CompetitionService;
