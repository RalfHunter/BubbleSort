"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLista = void 0;
const newLista = (size) => {
    let novaLista = [];
    for (let i = 0; i < size; i++) {
        let numero = Math.floor(Math.random() * 10);
        novaLista.push(numero);
    }
    return novaLista;
};
exports.newLista = newLista;
