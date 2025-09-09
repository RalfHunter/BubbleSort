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
describe('Lista certas', () => {
    let RankingFinal;
    let numero = 2000;
    beforeAll(() => {
        RankingFinal = [];
    });
    it(`Lista com array com ${numero * 2} numeros`, () => __awaiter(void 0, void 0, void 0, function* () {
        const arr = listaDecrescente(numero);
        const antes = performance.now();
        (0, BubbleSort_1.bubbleSortOptmize2)([...arr]);
        const depois = performance.now();
        const ranking = { lista: arr.length, tempo: depois - antes };
        RankingFinal.push(ranking);
        numero = arr.length;
        console.log(arr[arr.length - 1]);
    }));
    it(`Lista com array com ${numero * 2} numeros`, () => __awaiter(void 0, void 0, void 0, function* () {
        const arr = listaDecrescente(numero * 2);
        const antes = performance.now();
        (0, BubbleSort_1.bubbleSortOptmize2)([...arr]);
        const depois = performance.now();
        const ranking = { lista: arr.length, tempo: depois - antes };
        RankingFinal.push(ranking);
        numero = arr.length;
        console.log(arr[arr.length - 1]);
    }));
    it(`Lista com array com ${numero * 2} numeros`, () => __awaiter(void 0, void 0, void 0, function* () {
        const arr = listaDecrescente(numero * 2);
        const antes = performance.now();
        (0, BubbleSort_1.bubbleSortOptmize2)([...arr]);
        const depois = performance.now();
        const ranking = { lista: arr.length, tempo: depois - antes };
        RankingFinal.push(ranking);
        numero = arr.length;
        console.log(arr[arr.length - 1]);
    }));
    it(`Lista com array com ${numero * 2} numeros`, () => __awaiter(void 0, void 0, void 0, function* () {
        const arr = listaDecrescente(numero * 2);
        const antes = performance.now();
        (0, BubbleSort_1.bubbleSortOptmize2)([...arr]);
        const depois = performance.now();
        const ranking = { lista: arr.length, tempo: depois - antes };
        RankingFinal.push(ranking);
        numero = arr.length;
        console.log(arr[arr.length - 1]);
    }));
    afterAll(() => {
        let texto = "";
        for (const r of RankingFinal) {
            texto += `lista com ${r.lista} items demorou ${r.tempo} ms\n`;
        }
        const R = RankingFinal;
        const media = (R[0].tempo + R[1].tempo + R[2].tempo + R[3].tempo) / R.length;
        const variacao = ((R[0].tempo - media) ** 2 + (R[1].tempo - media) ** 2 + (R[2].tempo - media) ** 2 + (R[3].tempo - media) ** 2) / R.length;
        const DP = Math.sqrt(variacao);
        const CV = (DP / media) * 100;
        texto += `Coeficiente de variação é de ${CV}\n`;
        console.log(texto);
    });
});
function listaDecrescente(size) {
    let arr = [];
    while (size > 0) {
        arr.push(size);
        size--;
    }
    return arr;
}
