function sockMerchant(n, ar) {
    var counts = {};
    for (var i = 0; i < n; i++) {
        if (!counts[ar[i]]) {
            counts[ar[i]] = 1;
        } else {
            counts[ar[i]]++;
        }
    }

    var coupleSockCount = 0

    for (var key in counts) {
        counts[key] = Math.floor(counts[key] / 2)
        coupleSockCount += counts[key]
    }

    return coupleSockCount;
}

var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
var n = ar.length
console.log(sockMerchant(n, ar));