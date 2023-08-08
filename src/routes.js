import express from 'express';
import { listarInstrutores, listarInstrutorPorId, cadastrarInstrutor, atualizarInstrutor, atualizarStatusInstrutor } from './controllers/instrutoresController.js';
import { verificarId, verificarNomeEmail, verificarStatus } from './middleware/instrutoresMiddleware.js';

const routes = express();

routes.get('/instrutores', listarInstrutores);
routes.get('/instrutores/:id', verificarId, listarInstrutorPorId);
routes.post('/instrutores', verificarNomeEmail, cadastrarInstrutor);
routes.put('/instrutores/:id', verificarId, verificarNomeEmail, verificarStatus, atualizarInstrutor);
routes.patch('/instrutores/:id/status', verificarId, verificarStatus, atualizarStatusInstrutor);

export { routes };