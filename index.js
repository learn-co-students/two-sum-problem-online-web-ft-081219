function bruteForceTwoSum(array, sum){
    let result = []
    array.forEach((first, index) => {
        let seconds = array.slice(index + 1, array.length)
        seconds.forEach(second => {
            if (first + second === sum) {
                result.push([first, second])
            }
        })
    })
    return result
}

function binarySearch(array, complement, first = 0, last = array.length - 1){
    let middle = Math.floor(first + (last - first)/2)

    switch(true){
        // first check if the first value is a complement
        case array[first] === complement:
            return array[first]
        // then check if the middle value is a complement
        case array[middle] === complement:
            return array[middle]
        // then check if the last value is a complement
        case array[last] === complement:
            return array[last]
        // check if last index = the first index (i.e. run out of options)
        case last - first === 0:
            return false
        // if we still have options, then check the half of the array it could be in based on the middle
        case array[middle] > complement:
            return binarySearch(array, complement, first+1, middle-1)
        case array[middle] < complement:
            return binarySearch(array, complement, middle+1, last-1)
    }
}

function binarySearchTwoSum(array, sum){
    array.sort()

    let result = []
    let complements = []

    for (let i in array){
        let complement = binarySearch(array, sum - array[i])
        if (complement && !complements.includes(array[i]) && !complements.includes(complement)){
            result.push([array[i], complement])
            complements.push(complement)
        }
    }
    return result
}

function binaryMatch(array, sum){
    array.sort()
    for (let i in array){
        if (binarySearch(array, sum - array[i])){
            return true
        }
    }
    return false
}

function hashTwoSum(array, sum){
    const result = []
    const hash = {}
    
    for (let i in array){
        // get complement
        const complement = sum - array[i]

        // if we've already come across the compliment
        if (complement in hash) {
            result.push([complement, array[i]])
        }

        // save n in the hash as a possible compliment with its index as a value
        hash[array[i]] = i
    }

    return result
}