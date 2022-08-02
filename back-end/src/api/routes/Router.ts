/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from 'express';
import Controller from '../controllers/Base.controller';
import RankingController from '../controllers/Ranking.controller';

class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: Controller<T>,
    route: string = controller.route,
  ) {
    this.router.get(route, controller.findAll);
    this.router.get(`${route}/:id`, controller.findByPk);
    this.router.post(route, controller.create);
    this.router.patch(`${route}/:id/finish`, controller.update);
    this.router.delete(`${route}/:id`, controller.destroy);
  }

  public ranking() {
    this.router.get('/ranking', RankingController.findAll);
  }
}

export default CustomRouter;
