import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from './Base.controller';
import CompetitionResultService from '../services/Competition.service';
import { Competition } from '../interfaces/competition.interface';

class CompeititionController extends Controller<Competition> {
  private $route: string;

  constructor(
    service = new CompetitionResultService(),
    route = '/competition',
  ) {
    super(service);
    this.$route = route; 
  }
  
  get route() {
    return this.$route;
  }

  create = async (
    req: RequestWithBody<Competition>,
    res: Response<Competition | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;

    try {
      const competitionResult = await this.service.create(body);

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
    res: Response<Competition | ResponseError>,
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
    res: Response<Competition | ResponseError>,
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
    res: Response<Competition | ResponseError>,
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

export default CompeititionController;
