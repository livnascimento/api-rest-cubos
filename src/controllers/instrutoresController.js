import bancoDeDados from "../bd.js";

const listarInstrutores = (req, res) => {
    return res.json(bancoDeDados.instrutores);
};

const listarInstrutorPorId = (req, res) => {
    const id = Number(req.params.id);
    return res.json(bancoDeDados.instrutores.find(instrutor => instrutor.id === id));
};

const cadastrarInstrutor = (req, res) => {
    const identificador = bancoDeDados.instrutores[bancoDeDados.instrutores.length - 1].id + 1;
    const { nome, email, status } = req.body;
    const instrutor = {
        "id": identificador,
        nome,
        email,
        "status": status ?? true
    }
    bancoDeDados.instrutores.push(instrutor);
    res.status(200).json(instrutor);
};

const atualizarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;


    const instrutor = bancoDeDados.instrutores.find(instrutor => instrutor.id === Number(id));

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(203).send();
};

const atualizarStatusInstrutor = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const instrutor = bancoDeDados.instrutores.find(instrutor => instrutor.id === Number(id));
    instrutor.status = status;

    return res.status(203).send();
};

export { listarInstrutores, listarInstrutorPorId, cadastrarInstrutor, atualizarInstrutor, atualizarStatusInstrutor };