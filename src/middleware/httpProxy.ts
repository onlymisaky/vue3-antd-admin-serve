/* eslint-disable no-console */
import {
  createProxyMiddleware,
  Options,
  RequestHandler,
} from 'http-proxy-middleware';
import * as chalk from 'chalk';
import { hasOwn, filterMap, type } from '../utils/index';

interface WithTargetOptions extends Options {
  target: string;
}

interface ProxyConfig {
  [context: string]: string | WithTargetOptions
}

const defaultConfig = {
  logLevel: 'silent',
  secure: false,
  changeOrigin: true,
  ws: true,
  xfwd: true,
};

function normalizeOptions(proxyConfig: ProxyConfig) {
  if (type(proxyConfig) !== 'object') {
    console.log(chalk.red('反向代理配置错误，只支持对象或字符串格式'));
    console.log(chalk.red('将跳过所传入的配置'));
    return [];
  }

  const array = Object.entries(proxyConfig);

  return filterMap(array, {
    filter([context, config]) {
      if (type(config) === 'object' && !hasOwn(config, 'target')) {
        console.log(chalk.red(`反向代理${context}没有设置target，将跳过该配置`));
        return false;
      }
      const target = typeof config === 'string' ? config : config.target;
      if (!/^http(s)?:\/\//.test(target)) {
        console.log(chalk.red(`target ${target} 必须以 http:// 或 https:// 开头`));
        return false;
      }
      return true;
    },
    map([context, config]) {
      if (type(config) === 'string') {
        return {
          ...defaultConfig,
          target: config,
          context,
        };
      }
      return {
        ...defaultConfig,
        ...(config as WithTargetOptions),
        context,
      };
    },
  });
}

export function httpProxy(proxyConfig: ProxyConfig): RequestHandler[] {
  const proxy = normalizeOptions(proxyConfig);
  if (proxy.length === 0) {
    return [(req, res, next) => { next(); }];
  }
  // eslint-disable-next-line max-len
  const handles = proxy.map(({ context, ...options }) => createProxyMiddleware(context, options as WithTargetOptions));
  return handles;
}
