"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSortOptmize2 = exports.bubbleSortOptmize1 = exports.bubbleSort = void 0;
const bubbleSort = (arr) => {
    let n = arr.length;
    while (true) {
        let trocas = 0;
        for (let i = 0; i < n - 1; i++) {
            let anterior = arr[i];
            let proximo = arr[i + 1];
            if (anterior > proximo) {
                arr[i] = proximo;
                arr[i + 1] = anterior;
                trocas++;
            }
        }
        if (trocas == 0) {
            return arr;
        }
    }
};
exports.bubbleSort = bubbleSort;
const bubbleSortOptmize1 = (arr) => {
    let fim = 1;
    let n = arr.length;
    while (true) {
        let trocas = 0;
        for (let i = 0; i < n - fim; i++) {
            let anterior = arr[i];
            let proximo = arr[i + 1];
            if (anterior > proximo) {
                arr[i] = proximo;
                arr[i + 1] = anterior;
                trocas++;
            }
        }
        fim++;
        if (trocas == 0) {
            return arr;
        }
    }
};
exports.bubbleSortOptmize1 = bubbleSortOptmize1;
const bubbleSortOptmize2 = (arr) => {
    let n = arr.length;
    while (n > 0) {
        let trocas = 0;
        for (let i = 0; i < n - 1; i++) {
            let anterior = arr[i];
            let proximo = arr[i + 1];
            if (anterior > proximo) {
                arr[i] = proximo;
                arr[i + 1] = anterior;
                trocas++;
            }
        }
        if (trocas == 0)
            return arr;
        n--;
    }
    return arr;
};
exports.bubbleSortOptmize2 = bubbleSortOptmize2;
