/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from './Base.controller';
import CompetitionResultService from '../services/CompetitionResult.service';
import { CompetitionResult } from '../interfaces/competitionResult.interface';

class CompetitionResultsController extends Controller<CompetitionResult> {
  private $route: string;

  constructor(
    service = new CompetitionResultService(),
    route = '/competitions_results',
  ) {
    super(service);
    this.$route = route; 
  }
  
  get route() {
    return this.$route;
  }

  create = async (
    req: RequestWithBody<CompetitionResult>,
    res: Response<CompetitionResult | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;

    try {
      const competitionResult = await this.service.create(body);

      if (competitionResult.error === 'competition not created') {
        return res.status(404).json(
          { error: 'competition not created' },
        );
      }
      
      if (competitionResult === false) {
        return res.status(404).json(
          { error: 'competition finished' },
        );
      }

      if (competitionResult === null) {
        return res.status(404).json(
          { error: 'competition result already exists' },
        );
      }

      if (!competitionResult) {
        return res.status(500).json({ error: this.errors.internal });
      }

      if ('error' in competitionResult) {
        return res.status(400).json(competitionResult);
      }

      return res.status(201).json(competitionResult);
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error: this.errors.internal });
    }
  };

  findByPk = async (
    req: Request<{ id: string }>,
    res: Response<CompetitionResult | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: this.errors.requiredId });

    try {
      const competitionResult = await this.service.findByPk(id);

      return competitionResult
        ? res.json(competitionResult)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request<{ id: string }>,
    res: Response<CompetitionResult | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    const { body } = req;

    if (Object.keys(body).length === 0) return res.status(400).json();

    try {
      const competitionResult = await this.service.update(id, body);

      if (!competitionResult) {
        return res.status(404).json({ error: this.errors.notFound });
      }

      return res.status(200).json(competitionResult);
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error: this.errors.internal });
    }
  };

  destroy = async (
    req: Request<{ id: string }>,
    res: Response<CompetitionResult | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ error: this.errors.requiredId });

    try {
      const competitionResult = await this.service.destroy(id);

      if (!competitionResult) {
        return res.status(404).json({ error: this.errors.notFound });
      }

      return res.status(204).json(competitionResult);
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default CompetitionResultsController;
