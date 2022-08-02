// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorMiddleware = (err: string, _req: any, res: any) => {
  console.log(err);

  return res.status(500).json({ err, error: 'Internal Server Error' });
};

export default errorMiddleware;