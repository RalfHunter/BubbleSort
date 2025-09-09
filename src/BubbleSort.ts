export const bubbleSort = (arr: number[]): number[] =>{
    let n:number = arr.length
    while(true){
        let trocas = 0;
        for(let i:number = 0; i < n-1; i ++){
            let anterior:number = arr[i];
            let proximo:number = arr[i+1]
            if(anterior > proximo){
                arr[i] = proximo
                arr[i+1] = anterior
                trocas++
            }
        }
        if(trocas == 0){
            return arr
        }
    }
}
export const bubbleSortOptmize1 = (arr: number[]): number[] =>{
    let fim:number = 1
    let n:number = arr.length
    while(true){
        let trocas = 0;
        for(let i:number = 0; i < n - fim; i ++){
            let anterior:number = arr[i];
            let proximo:number = arr[i+1]
            if(anterior > proximo){
                arr[i] = proximo
                arr[i+1] = anterior
                trocas++
            }
        }
        fim++
        if(trocas == 0){
            return arr
        }
    }
}
export const bubbleSortOptmize2 = (arr: number[]): number[] =>{
    let n:number = arr.length
    while(n > 0){
        let trocas = 0;
        for(let i:number = 0; i < n - 1; i ++){
            let anterior:number = arr[i];
            let proximo:number = arr[i+1]
            if(anterior > proximo){
                arr[i] = proximo
                arr[i+1] = anterior
                trocas++
            }
        }
        if(trocas == 0) return arr;
        n--
    }
    return arr
}