// 1 - importar o express
import { Request, Response } from 'express';

// 2 - criar a  função para depois usar em rotas no index.ts.
export const home = (req: Request, res: Response) => {
    res.send('Home no controller');
}

// 2 - criar a  função para depois usar em rotas no index.ts.
export const dogs = (req: Request, res: Response) => {

}

// 2 - criar a  função para depois usar em rotas no index.ts.
export const cats = (req: Request, res: Response) => {

}

// 2 - criar a  função para depois usar em rotas no index.ts.
export const fishes = (req: Request, res: Response) => {
    //Commments
}

