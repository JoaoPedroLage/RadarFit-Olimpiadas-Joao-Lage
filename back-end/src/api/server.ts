import App from './app';

import CompetitionController from './controllers/Competition.controller';

import { Competition } from './interfaces/competition.interface';

import CustomRouter from './routes/Router';

const server = new App();

const competitionController = new CompetitionController();

const customRouter = new CustomRouter<Competition>();
customRouter.addRoute(competitionController);

server.addRouter(customRouter.router);

export default server;