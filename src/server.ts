/* eslint-disable no-console */
import * as http from 'http';
import * as chalk from 'chalk';
import app from './app';

const server = http.createServer(app);
server.listen(3000);

server.on('error', (err) => {
  console.log(chalk.red(err));
});
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(
    chalk.grey('vue3-antd-admin-serve:server'),
    chalk.green(`Listening on ${bind}`),
  );
});
