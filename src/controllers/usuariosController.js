const usuarioController = (app) => {

    app.get('/usuarios', (req, res) => {
        res.send("voce esta em tarefas")
    })
    app.post('/usuarios', (req, res) => {
        res.send(req.body)
    })


}

export default usuarioController