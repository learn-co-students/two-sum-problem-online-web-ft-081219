function bruteForceTwoSum(array, sum){
  let result = [];
  array.forEach((first, index) => {
    let seconds = array.slice(index + 1, array.length)
    seconds.forEach(second => {
      if(first + second === sum){
        result.push([first, second]);
      }
    })
  })
  return result;
}


function binarySearch(array, complement, first = 0, last = array.length - 1){
  let middle = Math.floor(first+ (last - first) / 2);

  switch (true) {
    case array[first] === complement:
      return array[first]
    case array[middle] === complement:
      return array[middle]
    case array[last] === complement:
      return array[last]
    case last - first === 0:
      return false
    case array[middle] > complement:
      return binarySearch(array, complement, first + 1, middle - 1)
    case array[middle] < complement:
      return binarySearch(array, complement, middle + 1, last - 1)

  }
}


function binarySearchTwoSum(array, sum){
  array.sort();

  let result = [];
  let complements = [];

  for(let i in array){
    let complement = binarySearch(array, sum - array[i])
    if(complement && !complements.includes(array[i]) && !complements.includes(complement)){
      result.push([array[i], complement])
      complements.push(complement)
    }
  }
  return result;
}

function binaryMatch(array, sum){
  array.sort();

  for(let i in array){
    if(binarySearch(array, sum - array[i])){
      return true;
    }
  }
  return false;
}


function hashTwoSum(array, sum){
  let result = [];
  let hash = {};

  for(let i in array){
    let complement = sum - array[i];

    if(complement in hash){
      result.push([complement, array[i]])
    }
    hash[array[i]] = i;
  }
  return result;
}
