import bancoDeDados from "../bd.js";

const cadastrarAula = (req, res) => {
    const { titulo, descricao } = req.body;
    const {id} = req.params;
    
    const instrutor = bancoDeDados.instrutores.find(instrutor => instrutor.id === Number(id));
    
    const aula = {
        id: !bancoDeDados.aulas ? 1 : bancoDeDados.aulas.length + 1,
        titulo,
        descricao,
        instrutor: instrutor.nome
    }

    if (!bancoDeDados.aulas) {bancoDeDados.aulas = []};

    bancoDeDados.aulas.push(aula);

    return res.status(204).send();
};

const listarAulas = (req, res) => {
    return res.json(bancoDeDados.aulas);
}

const listarAulasPorId = (req, res) => {
    const { id } = req.params;

    const aula = bancoDeDados.aulas.find(aula => aula.id === Number(id));

    return res.json(aula);
}

const listarAulasPorInstrutor = (req, res) => {
    const { id } = req.params;
    const instrutor = bancoDeDados.instrutores.find(instrutor => instrutor.id === Number(id));

    const aulas = bancoDeDados.aulas.filter(aula => aula.instrutor === instrutor.nome);
    return res.json(aulas);
}

export {
    cadastrarAula,
    listarAulas,
    listarAulasPorId,
    listarAulasPorInstrutor
}