import { bubbleSort, bubbleSortOptmize1, bubbleSortOptmize2 } from "../src/BubbleSort"
import { newLista } from "../src/auxiliares/GerarListas"
import { Placar } from "../src/Interface";
describe('bubbleSort', () => {
    let listaDesordenada: number[];
    let listaOrdenadaNativa: number[];
    let metodoSimples:Placar;
    let metodoOtimizado_1:Placar;
    let metodoOtimizado_2:Placar;
    let ranking:Placar[] = [];
    beforeAll(() =>{
        listaDesordenada = newLista(10_000)
        listaOrdenadaNativa = [...listaDesordenada].sort()
        // console.log(listaDesordenada)
       
    })
    describe('BubbleSort Padrão', () => {
        it('Deve retornar uma lista ordenada', async () => {
            const inicio = performance.now()
            let listaOrdenada = bubbleSort([...listaDesordenada])
            expect(listaOrdenada).toEqual(listaOrdenadaNativa)
            const fim = performance.now()
            metodoSimples = { 
                tempo: fim-inicio, 
                nome:"Bubble Sort Padrão"
            }
            ranking.push(metodoSimples)
        })
    })
    describe('BubbleSort Otimizado1', () => {
        it('Deve retornar uma lista ordenada', async () => {
            const inicio = performance.now()
            let listaOrdenada = bubbleSortOptmize1([...listaDesordenada])
            expect(listaOrdenada).toEqual(listaOrdenadaNativa)
            const fim = performance.now()
            metodoOtimizado_1 = {
                tempo: fim-inicio,
                nome: "Bubble Sort Otimizado 1"
            }
            ranking.push(metodoOtimizado_1)
        })
    })
        describe('BubbleSort Otimizado', () => {
        it('Deve retornar uma lista ordenada', async () => {
            const inicio = performance.now()
            let listaOrdenada = bubbleSortOptmize2([...listaDesordenada])
            expect(listaOrdenada).toEqual(listaOrdenadaNativa)
            const fim = performance.now()
            metodoOtimizado_2 = { 
                tempo: fim-inicio,
                nome:"Bubble Sort Otimizado 2"
            }
            ranking.push(metodoOtimizado_2)
        })
    })
    afterAll(() => {
        const Ranking = (arr: Placar[]): Placar[] => {
            let fim = 1
            let n = arr.length
            while (true) {
                let trocas = 0
                for (let i: number = 0; i < n - fim; i++) {
                    let bubble_prev: Placar = ranking[i]
                    let bubble_prox: Placar = ranking[i + 1]
                    if (bubble_prev.tempo > bubble_prox.tempo) {
                        ranking[i] = bubble_prox
                        ranking[i + 1] = bubble_prev
                        trocas ++
                    }
                }
                fim ++
                if(trocas == 0) return arr;
            }
        }
        const PlacarFinal = Ranking(ranking)
        let Texto:string = "";
        for(let i: number = 0; i < PlacarFinal.length; i++) {
            Texto += `${PlacarFinal[i].nome} -> ${PlacarFinal[PlacarFinal.length-1].tempo * 100 / PlacarFinal[i].tempo - 100 }% mais rápido que ${PlacarFinal[PlacarFinal.length-1].nome} \n`
        }
        console.log(Texto)
    })
})