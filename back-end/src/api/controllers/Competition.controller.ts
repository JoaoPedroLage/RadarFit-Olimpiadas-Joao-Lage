import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from './Base.controller';
import CompetitionService from '../services/Competition.service';
import { Competition } from '../interfaces/competition.interface';

class CompeititionController extends Controller<Competition> {
  private $route: string;

  constructor(
    service = new CompetitionService(),
    route = '/competitions',
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
      const competition = await this.service.create(body);

      if (competition === null) {
        return res.status(404).json({ error: 'competition already exists' });
      }

      if (!competition) {
        return res.status(500).json({ error: this.errors.internal });
      }

      if ('error' in competition) {
        return res.status(400).json(competition);
      }

      return res.status(201).json(competition);
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
      const competition = await this.service.findByPk(id);

      return competition
        ? res.json(competition)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error: this.errors.internal });
    }
  };

  update = async (
    req: Request<{ id: string }>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res: Response<Competition | ResponseError | any>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    const { body } = req;

    if (Object.keys(body).length === 0) return res.status(400).json();

    try {
      const competition = await this.service.update(id, body);

      if (!competition) {
        return res.status(404).json({ error: this.errors.notFound });
      }

      return res.status(200).json(
        { message: 'Competition successfully finished', competition },
      );
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
      const competition = await this.service.destroy(id);

      if (!competition) {
        return res.status(404).json({ error: this.errors.notFound });
      }

      return res.status(204).json(competition);
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default CompeititionController;
