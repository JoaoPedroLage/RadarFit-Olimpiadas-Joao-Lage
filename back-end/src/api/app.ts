import express, { Router } from 'express';
// import errorMiddleware from './middlewares/errorHandler';

class App {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public app: any;

  constructor() {
    this.app = express();
    this.app.use(express.json());
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
}

export default App;
