import express from 'express';
import { HandsOnTeste } from './handsOnTeste';

const app = express();

const handsOnTeste = new HandsOnTeste();

handsOnTeste.numeroPerfeito(28);
handsOnTeste.validaID('abc12');

app.listen(3000, () => console.log("Server is running!"));