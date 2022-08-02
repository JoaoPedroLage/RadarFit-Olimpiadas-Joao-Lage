import express, { Router } from 'express';
// import errorMiddleware from './middlewares/errorHandler';

class App {
  // public app: express.Application;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    // this.errorHandler();
  }

  public startServer(PORT: string | number = 3001): void {
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }

  // public errorHandler() {
  //   this.app.use(errorMiddleware);
  // }
}

export default App;
