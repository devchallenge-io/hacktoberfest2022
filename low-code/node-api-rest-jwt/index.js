const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTSecret = "Nuhauihueiah7867312093hjdhancxhioahU%$%@76879631913giygiNAYLSON";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware para utilizar na auth jwt
//Toda vez que for preciso autoriza um acesso, chamamos a variável auth e colocamos ela como Middleware, posição média do request
//Assim que é feito o processamento do middleware você precisar chamar o next()
//O next faz com que ele passe a requisição para rota
function auth(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1];
        console.log(token);

        jwt.verify(token,JWTSecret,(err, data) => {
            if(err){
                res.status(401);
                res.json({err:"Token inválido!"});
            }else{
                console.log(data);       
                req.token = token;
                req.loggedUser = {id: data.id,email: data.email};
                req.empresa = "Naylson NodeJS";   
                      
                next();
            }
        });
    }else{
        res.status(401);
        res.json({err:"Token inválido!"});
    } 
}



var DB = {
    games: [
        {
            id: 23,
            titulo: "GTA V",
            ano: 2013,
            valor: 60,
        },
        {
            id: 65,
            titulo: "Call of Duty MW",
            ano: 2019,
            valor: 257,
        },
        {
            id: 2,
            titulo: "Counter Strike 1.6",
            ano: 2000,
            valor: 20,
        },
    ],
    users: [
        {
            id: 1,
            name: "Naylson",
            email: "naylsonrj@gmail.com",
            password: "Bolsonaro22",
        },
        {
            id: 2,
            name: "Naylson Costa",
            email: "naylsonrj@gmail.com",
            password: "admin",
        },
    ],
};


// CRIANDO ROTA GET (trazer todos os dados de games)
app.get("/games", auth, (req, res) => {
    res.statusCode = 200; // requisição feita com sucesso
    res.json({empresa: req.empresa,user: req.loggedUser,games: DB.games}); //rota que retornam dados
});

// CRIANDO ROTA GET (trazer um ID específico)
app.get("/games/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        //verifica se o id é um número ou não
        res.sendStatus(400);
    } else {
        //se for um número
        var id = parseInt(req.params.id); //converte o id para inteiro
        var game = DB.games.find((g) => g.id == id); //verifica se o id existe no banco de dados

        if (game != undefined) {
            res.statusCode = 200; // requisição feita com sucesso
            res.json(game);
        } else {
            res.sendStatus(404); //se não existir o id, retorna 404
        }
    }
});

app.post("/game", (req, res) => {
    var { titulo, valor, ano } = req.body;

    DB.games.push({
        id: 2323,
        titulo,
        valor,
        ano,
    });

    res.sendStatus(200);
});

app.delete("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex((g) => g.id == id);

        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find((g) => g.id == id);

        if (game != undefined) {
            var { titulo, valor, ano } = req.body;

            if (titulo != undefined) {
                game.titulo = titulo;
            }

            if (valor != undefined) {
                game.valor = valor;
            }

            if (ano != undefined) {
                game.ano = ano;
            }

            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    }
});

// AUTENTICAÇÃO DE USUÁRIO
app.post("/auth", (req, res) => {
    var { email, password } = req.body;

    if (email != undefined) {
        var user = DB.users.find((u) => u.email == email);
        if (user != undefined) {
            if (user.password == password) {
                jwt.sign(
                    { id: user.id, email: user.email },
                    JWTSecret,
                    { expiresIn: "48h" },
                    (err, token) => {
                        if (err) {
                            res.status(400);
                            res.json({ err: "Falha interna" });
                        } else {
                            res.status(200);
                            res.json({ token: token });
                        }
                    }
                );
            } else {
                res.status(401);
                res.json({ err: "Credenciais inválidas!" });
            }
        } else {
            res.status(404);
            res.json({ err: "O E-mail enviado não existe na base de dados!" });
        }
    } else {
        res.status(400);
        res.send({ err: "O E-mail enviado é inválido" });
    }
});

// ENDEREÇO DA ROTA GAMES ->  http://localhost:3000/games
app.listen(3000, () => {
    console.log("API RODANDO na porta 3000");
});
