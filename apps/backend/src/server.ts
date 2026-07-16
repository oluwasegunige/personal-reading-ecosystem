import Fastify from 'fastify';
import { API_V1_PREFIX } from '@reading/api-client';

/** The cloud boundary is intentionally thin: sync, storage, auth, and device coordination only. */
export const createServer = () => {
  const server = Fastify({ logger: true });
  server.get(`${API_V1_PREFIX}/health`, async () => ({ status: 'ok' }));
  return server;
};

if (process.env.NODE_ENV !== 'test') {
  const server = createServer();
  void server.listen({ host: '0.0.0.0', port: 3000 });
}
