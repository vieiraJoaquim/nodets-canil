//1 - Importar a libs
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//2 - criar o arquivo .env na raiz
dotenv.config();

const server = express();

//3 - criar a pasta views dentro de src e startar o mustache e o path
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// 4 - Criar a pasta publica na raiz onde entram os arquivos do front
server.use(express.static(path.join(__dirname, '../public')));

//5 - Rotas aqui
server.use(mainRoutes);

//5 - Pag not found
server.use((req, res)=> {
    res.send('Página não encontrada');
});

//1 - Servidor pra rodar
server.listen(process.env.PORT);