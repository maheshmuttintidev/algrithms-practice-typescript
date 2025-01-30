function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let price of prices) {
        if(price < minPrice) {
            minPrice = price;
        } else {
            const profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit)
        }
    }

    return maxProfit
}

const maxProfitT1 = maxProfit([7,1,5,3,6,4])
const maxProfitT2 = maxProfit([7,6,4,3,1])
console.log(maxProfitT1) // 5
console.log(maxProfitT2) // 0
