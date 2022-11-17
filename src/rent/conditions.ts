export async function conditions(tariff: number, days: number): Promise<any> {
    let sum = 0
    if(tariff === 1){
        sum = 270
    }
    if(tariff === 2){
        sum = 330
    }
    if(tariff === 3){
        sum = 390
    }
    sum *= days
    if (days > 3 && days < 6) {
        sum -= sum * 0.05 
    }

    if (days > 6 && days < 14) {
        sum -= sum * 0.1 
    }
    if (days > 15 && days < 30) {
        sum -= sum * 0.15 
    }

    return `It will cost ${sum}₽`
}