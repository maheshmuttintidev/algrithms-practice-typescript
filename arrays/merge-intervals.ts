function mergeIntervals(intervals: number[][]): number[][] {

    if(intervals.length === 0) return [];
    
    intervals.sort((a, b) => a[0] - b[0])

    const merged: number[][] = []


    for(let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        // console.log("🚀 ~ mergeIntervals ~ currentInterval:", currentInterval)
        if(merged.length === 0 || merged[merged.length - 1][1] < currentInterval[0]) {
            merged.push(currentInterval)            
            // console.log('if condition merged', merged)
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], currentInterval[1])
            // console.log('else condition merged:', merged)
        }
    }
    return merged;
}


const mergeIntervalsT1 = mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])

console.log(mergeIntervalsT1)