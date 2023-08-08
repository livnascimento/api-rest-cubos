import bancoDeDados from "../bd.js";

const verificarId = (req, res, next) => {
    const id = Number(req.params.id);
    const naoExisteId = bancoDeDados.instrutores.find(instrutor => instrutor.id === id) === undefined ? true : false
    if (naoExisteId) {
        return res.status(404).json({ "message": "Não há um instrutor com esse id :(" });
    }
    next();
};

const verificarNomeEmail = (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome) {
        return res.status(400).json({ "message": "O nome do instrutor é obrigatório :p" })
    }

    if (!email) {
        return res.status(400).json({ "message": "O email do instrutor é obrigatório :p" })
    }
    next();
};

const verificarStatus = (req, res, next) => {
    const { status } = req.body;

    if (status === undefined) {
        return res.status(400).json({ "message": "O status do instrutor é obrigatório :p" })
    }

    next();
}

export { verificarId, verificarNomeEmail, verificarStatus };