import App from './app';

import CompetitionController from './controllers/Competition.controller';
// eslint-disable-next-line max-len
import CompetitionResultsController from './controllers/CompetitionResult.controller';

import { Competition } from './interfaces/competition.interface';
import { CompetitionResult } from './interfaces/competitionResult.interface';

import CustomRouter from './routes/Router';

const server = new App();

const competitionController = new CompetitionController();
const competitionResultsController = new CompetitionResultsController();

const competitionRouter = new CustomRouter<Competition>();
const competitionResultsRouter = new CustomRouter<CompetitionResult>();

competitionRouter.addRoute(competitionController);
competitionResultsRouter.addRoute(competitionResultsController);

server.addRouter(competitionRouter.router);
server.addRouter(competitionResultsRouter.router);

export default server;