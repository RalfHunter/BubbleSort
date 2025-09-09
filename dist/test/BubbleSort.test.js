"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BubbleSort_1 = require("../src/BubbleSort");
const GerarListas_1 = require("../src/auxiliares/GerarListas");
describe('bubbleSort', () => {
    let listaDesordenada;
    let listaOrdenadaNativa;
    let metodoSimples;
    let metodoOtimizado_1;
    let metodoOtimizado_2;
    let ranking = [];
    beforeAll(() => {
        listaDesordenada = (0, GerarListas_1.newLista)(10000);
        listaOrdenadaNativa = [...listaDesordenada].sort();
        // console.log(listaDesordenada)
    });
    describe('BubbleSort Padrão', () => {
        it('Deve retornar uma lista ordenada', () => __awaiter(void 0, void 0, void 0, function* () {
            const inicio = performance.now();
            let listaOrdenada = (0, BubbleSort_1.bubbleSort)([...listaDesordenada]);
            expect(listaOrdenada).toEqual(listaOrdenadaNativa);
            const fim = performance.now();
            metodoSimples = {
                tempo: fim - inicio,
                nome: "Bubble Sort Padrão"
            };
            ranking.push(metodoSimples);
        }));
    });
    describe('BubbleSort Otimizado1', () => {
        it('Deve retornar uma lista ordenada', () => __awaiter(void 0, void 0, void 0, function* () {
            const inicio = performance.now();
            let listaOrdenada = (0, BubbleSort_1.bubbleSortOptmize1)([...listaDesordenada]);
            expect(listaOrdenada).toEqual(listaOrdenadaNativa);
            const fim = performance.now();
            metodoOtimizado_1 = {
                tempo: fim - inicio,
                nome: "Bubble Sort Otimizado 1"
            };
            ranking.push(metodoOtimizado_1);
        }));
    });
    describe('BubbleSort Otimizado', () => {
        it('Deve retornar uma lista ordenada', () => __awaiter(void 0, void 0, void 0, function* () {
            const inicio = performance.now();
            let listaOrdenada = (0, BubbleSort_1.bubbleSortOptmize2)([...listaDesordenada]);
            expect(listaOrdenada).toEqual(listaOrdenadaNativa);
            const fim = performance.now();
            metodoOtimizado_2 = {
                tempo: fim - inicio,
                nome: "Bubble Sort Otimizado 2"
            };
            ranking.push(metodoOtimizado_2);
        }));
    });
    afterAll(() => {
        const Ranking = (arr) => {
            let fim = 1;
            let n = arr.length;
            while (true) {
                let trocas = 0;
                for (let i = 0; i < n - fim; i++) {
                    let bubble_prev = ranking[i];
                    let bubble_prox = ranking[i + 1];
                    if (bubble_prev.tempo > bubble_prox.tempo) {
                        ranking[i] = bubble_prox;
                        ranking[i + 1] = bubble_prev;
                        trocas++;
                    }
                }
                fim++;
                if (trocas == 0)
                    return arr;
            }
        };
        const PlacarFinal = Ranking(ranking);
        let Texto = "";
        for (let i = 0; i < PlacarFinal.length; i++) {
            Texto += `${PlacarFinal[i].nome} -> ${PlacarFinal[PlacarFinal.length - 1].tempo * 100 / PlacarFinal[i].tempo - 100}% mais rápido que ${PlacarFinal[PlacarFinal.length - 1].nome} \n`;
        }
        console.log(Texto);
    });
});
