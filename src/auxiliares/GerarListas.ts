export const newLista = (size:number): number[] => {
    let novaLista:number[] = []
    for(let i:number = 0 ; i < size; i++){
        let numero:number = Math.floor(Math.random()*10)
        novaLista.push(numero)
    }
    return novaLista;
}