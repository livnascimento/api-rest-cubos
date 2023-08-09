import express from 'express';
import { listarInstrutores, listarInstrutorPorId, cadastrarInstrutor, atualizarInstrutor, atualizarStatusInstrutor, deletarInstrutor } from './controllers/instrutoresController.js';
import { cadastrarAula, listarAulas, listarAulasPorId, listarAulasPorInstrutor } from './controllers/aulasController.js';
import { verificarId, verificarNomeEmail, verificarStatus } from './middleware/instrutoresMiddleware.js';
import { verificarDescricao, verificarTitulo, verificarIdAula, verificarAulas } from './middleware/aulasMiddleware.js';
const routes = express();

routes.get('/instrutores', listarInstrutores);
routes.get('/instrutores/:id', verificarId, listarInstrutorPorId);
routes.post('/instrutores', verificarNomeEmail, cadastrarInstrutor);
routes.put('/instrutores/:id', verificarId, verificarNomeEmail, verificarStatus, atualizarInstrutor);
routes.patch('/instrutores/:id/status', verificarId, verificarStatus, atualizarStatusInstrutor);
routes.delete('/instrutores/:id', verificarId, deletarInstrutor);

routes.post('/instrutores/:id/aulas', verificarId, verificarTitulo, verificarDescricao, cadastrarAula);
routes.get('/aulas', verificarAulas, listarAulas);
routes.get('/aulas/:id', verificarAulas, verificarIdAula, listarAulasPorId);
routes.get('/instrutores/:id/aulas', verificarId, listarAulasPorInstrutor)

export { routes };