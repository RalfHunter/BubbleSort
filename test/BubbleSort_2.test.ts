import { bubbleSort, bubbleSortOptmize1, bubbleSortOptmize2 } from "../src/BubbleSort";
interface Ranking {
    lista:number,
    tempo:number
}
describe('Lista certas', ()=>{
    let RankingFinal:Ranking[]
    let numero:number = 2_000
    beforeAll(() =>{
        RankingFinal = []

    })

    it(`Lista com array com ${numero * 2} numeros`, async () =>{
        const arr = listaDecrescente(numero * 2)
        const antes = performance.now()
        bubbleSortOptmize2(arr)
        const depois = performance.now()
        const ranking:Ranking = {lista:arr.length, tempo:depois - antes}
        RankingFinal.push(ranking)
        numero = arr.length
    });

    it(`Lista com array com ${numero * 2} numeros`, async () =>{
        const arr = listaDecrescente(numero * 2)
        const antes = performance.now()
        bubbleSortOptmize2(arr)
        const depois = performance.now()
        const ranking:Ranking = {lista:arr.length, tempo:depois - antes}
        RankingFinal.push(ranking)
        numero = arr.length
    });

    it(`Lista com array com ${numero * 2} numeros`, async () =>{
        const arr = listaDecrescente(numero * 2)
        const antes = performance.now()
        bubbleSortOptmize2(arr)
        const depois = performance.now()
        const ranking:Ranking = {lista:arr.length, tempo:depois - antes}
        RankingFinal.push(ranking)
        numero = arr.length
    })

    afterAll(()=>{
        let texto:string = ""
        for(const r of RankingFinal){
            texto += `lista com ${r.lista} items demorou ${r.tempo} ms\n`
        }
        const R = RankingFinal
        const media = (R[0].tempo + R[1].tempo + R[2].tempo) / 2
        const variacao = ((R[0].tempo - media)**2 + (R[1].tempo -media)**2 + (R[2].tempo-media)**2)/R.length
        const DP = Math.sqrt(variacao)
        const CV = (DP/media)*100
        texto += `Coeficiente de variação é de ${CV}\n`
        console.log(texto)
    })

})

function listaDecrescente(size:number): number[]{
    let arr:number[] =[]
    while(size > 0) {
        arr.push(size)
        size --
    }
    return arr
}