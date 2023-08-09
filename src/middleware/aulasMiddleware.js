import bancoDeDados from "../bd.js";

const verificarTitulo = (req, res, next) => {
    if (req.body.titulo === undefined) {
        return res.status(400).json({"message": "O título é obrigatório"});
    }
    next();
}

const verificarDescricao = (req, res, next) => {
    if (req.body.descricao === undefined) {
        return res.status(400).json({"message": "A descrição é obrigatória!"});
    }
    next();
}

const verificarIdAula = (req, res, next) => {
    if (!req.params.id) return res.status(400).json({"message": "Não há aula com esse id"});
    next();
}

const verificarAulas = (req, res, next) => {
    if (!bancoDeDados.aulas) return res.status(400).json({"message": "Não há aulas cadastradas"});
    next();
}

export {
    verificarTitulo,
    verificarDescricao,
    verificarIdAula,
    verificarAulas
}