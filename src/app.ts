import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import { httpProxy } from './middleware/httpProxy';
import { indexRoute } from './routes/index';
import { userRoute } from './routes/user';
import { articleRoute } from './routes/article';
import { Result } from './utils/result';

const app: express.Express = express();

app.use('/', indexRoute);
app.use('/user', userRoute);
app.use('/article', articleRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(httpProxy({
  '/api': {
    target: '',
  },
  '/ajax': {
    target: '',
  },
}));

app.use((
  req: express.Request,
  res: express.Response,
) => {
  res.status(404).json(Result.fail('404', 404));
});

export default app;
