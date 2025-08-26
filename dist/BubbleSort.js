"use strict";
const bubbleSort = (arr) => {
    while (true) {
        let trocas = 0;
        for (let i = 0; i < arr.length - 1; i++) {
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
console.log(bubbleSort([35, 56, 2, 11, 47, 5, 8, 22, 3, 4, 8, 9, 0]));
