import { Hono } from 'hono';
import { cors } from 'hono/cors';

import callback from './routes/callback.ts';

const app = new Hono();

app.use('*', cors());

app.get('/', (c) => c.text('Hello Blog Comment Server!'));

app.get('/callback', callback);

export default app;
