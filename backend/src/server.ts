import express from 'express';

const app = express();

import cors from "cors";

const PORT = 3001;

app.use(
    cors({
    origin: "http://localhost:5173" // permitir requisições originadas nesse endereço
    })
);

app.use(express.json()); // Middleware para habilitar o parsing de JSON no corpo das requisições. Isso permite que o servidor entenda e processe dados enviados em formato JSON, que é comumente usado em APIs RESTful.

app.use((req, _res, next) => {
    console.log(`Método: ${req.method} | URL: ${req.url}`);

    next(); // Chama o próximo middleware na cadeia de execução. Sem essa chamada, a requisição ficaria pendente e não seria processada corretamente.
})

app.get('/', (_req, res) => {
    res.json({
        message: 'API funcionando'
    });
});

app.get('/users/:userId', (req, res) => {
    const user = Number(req.params.userId); // Params serve para identificar um recurso específico, como um usuário, por exemplo. O valor do parâmetro é sempre uma string, então precisamos convertê-lo para o tipo desejado.

    if (Number.isNaN(user)){
        return res.status(400).json({
            message: 'ID do usuário inválido'
        })
    }

    res.json({
        user,
    });
});

/*
200 → OK
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Internal Server Error
*/


app.get('/search', (req, res) => {
    const term = req.query.term; // Query serve para filtrar ou buscar recursos, como uma lista de usuários, por exemplo. O valor do parâmetro é sempre uma string, então precisamos convertê-lo para o tipo desejado.

    res.json({
        term,
    })
})

app.get('/videos', (req, res) => { // Exemplo de multiplos query params, que são usados para filtrar ou buscar recursos, como uma lista de vídeos, por exemplo. O valor do parâmetro é sempre uma string, então precisamos convertê-lo para o tipo desejado.
    const page = Number(req.query.page ?? 1)
    const limit = Number(req.query.limit ?? 10)

    if (page < 1 || limit < 1) {
        return res.status(400).json({
            message: 'Page e Limit devem ser maiores que zero!'
        })
    }

    res.json({
        page, 
        limit,
        message: `Exibindo vídeos da página ${page} com limite de ${limit} vídeos por página.` 
    })
})


// POST

app.post('/videos', (req, res) => {
    const { title, description } = req.body;

    if(typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({
            message: 'O título do vídeo é obrigatório!'
        })
    }

    res.status(201).json({
        title: title.trim(),
        description,
    })
})

/*

req.params
→ informação estrutural da URL

req.query
→ filtros/opções da URL

req.body
→ dados enviados dentro da requisição

*/



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})