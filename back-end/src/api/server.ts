/* eslint-disable max-len */
import App from './app';

import CompetitionController from './controllers/Competition.controller';
import CompetitionResultsController from './controllers/CompetitionResult.controller';

import { Competition } from './interfaces/competition.interface';
import { CompetitionResult } from './interfaces/competitionResult.interface';

import CustomRouter from './routes/Router';

const server = new App();

const competitionController = new CompetitionController();
const competitionResultsController = new CompetitionResultsController();

const competitionRouter = new CustomRouter<Competition>();
const competitionResultsRouter = new CustomRouter<CompetitionResult>();
const rankingRouter = new CustomRouter();

competitionRouter.addRoute(competitionController);
competitionResultsRouter.addRoute(competitionResultsController);
rankingRouter.ranking();

server.addRouter(competitionRouter.router);
server.addRouter(competitionResultsRouter.router);
server.addRouter(rankingRouter.router);

export default server;