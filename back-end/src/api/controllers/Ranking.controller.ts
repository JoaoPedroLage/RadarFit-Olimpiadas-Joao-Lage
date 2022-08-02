/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ResponseError } from './Base.controller';
import RankingService from '../services/Ranking.service';

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
}
class RankingController {
  static errors = ControllerErrors;
  
  static findAll = async (
    _req: Request,
    res: Response<ResponseError | any>,
  ): Promise<typeof res> => {
    try {
      const objs = await (new RankingService()).findAll();
      return res.json(objs);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}

export default RankingController;
