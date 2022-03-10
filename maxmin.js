function maxMin(arr) {
    let maxVal = arr[0]
    let minVal = arr[0]

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > maxVal) {
            maxVal = arr[i]
        } else if (arr[i] < minVal) {
            minVal = arr[i]
        }
    }

    return [maxVal,minVal]
}

console.log(maxMin([20, 50, 12, 6, 14, 8]))