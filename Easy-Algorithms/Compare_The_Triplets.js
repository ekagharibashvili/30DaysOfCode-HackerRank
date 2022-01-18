function compareTriplets(a, b) {
    let arr = Array(2).fill(0)
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            arr[0]++
        }
        else if (a[i] < b[i]) {
            arr[1]++
        }
    }
    return arr
}