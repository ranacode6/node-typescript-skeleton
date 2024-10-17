import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<any> => {
  return res.status(200).send({
    message: 'Hello World!'
  });
});

app.post('/post', async (req: Request, res: Response): Promise<any> => {
  return res.status(200).send({
    message: 'Hello world from the post'
  });
});

const PORT = 3000;

try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on port ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
