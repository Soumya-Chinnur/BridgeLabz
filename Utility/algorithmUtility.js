exports.primeGenerate = (number) => {
    const primeArray = [];
    for (let i = 1; i <= number; i++) {
        const temp = 0;
        for (let j = 2; j <= i - 1; j++) {
            if (i % j == 0) {
                temp = temp + 1;
            }
        }
        if (temp == 0) {
            //console.log(i)
            primeArray.push(i);
        }
    }
    return primeArray
}
exports.anagramprime = (primeArray) => {
    const anagram = [];
    for (let j = 0; j < primeArray.length; j++) {
        for (let k = j + 1; k < primeArray.length; k++) {
            if (checkAnagram(primeArray[j], primeArray[k])) {
                anagram.push(primeArray[j]);
                anagram.push(primeArray[k])
            }
        }
    }
    return anagram;
}
/*
*CheckAnagram
*/
checkAnagram = (numberOne, numberTwo) => {
    numberOne = '' + numberOne;
    numberTwo = '' + numberTwo;
    numberOneArray = numberOne.split('');
    numberTwoArray = numberTwo.split('');
    numberOneArraySort = this.bubbleSort(numberOneArray);
    numberTwoArraySort = this.bubbleSort(numberTwoArray);
    if (numberOneArraySort.join() == numberTwoArraySort.join())
        return true;
    return false;
}
/*
*bubblesort
*/
exports.bubbleSort = (a) => {
    //  var a = [36, 19, 29, 12, 5];
    const temp = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1 - i; j++) {
            let flag = 0;
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                flag = 1;
            }

        }
        if (flag == 0) {
            break;
        }
    }
    return a
}
/*
Anagram
*/
exports.Anagram = (str1, str2) => {
    try {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        if (str1.length != str2.length) {
            console.log("Strings are not anagram");
        }
        else {
            const s1 = str1.split("");//splits the given string into array of string by separting substrings using separator
            const s2 = str2.split("");
        }
        s1 = s1.sort();
        console.log(s1);
        s2 = s2.sort();
        console.log(s2);
        if (s1.join('') == s2.join('')) {//join used to join the elements of array into strings
            console.log("Anagram");
        }
        else {
            console.log("not anagram");
        }
    }
    catch (err) {
        console.log(err);
    }
}

/*
BinarySearch
*/
exports.binarySearch = (a, search) => {
    try {
        a = a.sort();
        const li = 0;
        hi = a.length - 1;
        mi = Math.floor((li + hi) / 2);//Math.floor returns largest integer less than or equal to given number 

        while (a[mi] != search && li < hi) {
            if (search < a[mi]) {
                hi = mi - 1;
            }
            else if (search > a[mi]) {
                li = mi + 1;
            }
            mi = Math.floor((li + hi) / 2);
            // console.log(mi);
        }
        return (a[mi] != search) ? -1 : mi;
    }
    catch (err) {
        console.log(err);
    }
}
/*
Bubblesort
*/
exports.bubbleSort = (number) => {
    const a = [36, 19, 29, 12, 5];
    const temp = 0;
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number - 1 - i; j++) {
            let flag = 0;
            if (a[j] > a[j + 1]) {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                flag = 1;
            }

        }
        if (flag == 0) {
            break;
        }
    }
    for (let i = 0; i < a.length; i++) {
        console.log(a[i] + " ");
    }
}
/*
Insertion sort
*/
exports.insertionSort = (number) => {
    try {
        const a = [5, 1, 6, 2, 4, 3];
        const temp = 0;
        const j = 0;
        for (let i = 1; i < number; i++) {
            temp = a[i];
            j = i;
            while (j > 0 && a[j - 1] > temp) {
                a[j] = a[j - 1];
                j = j - 1;
            }
            a[j] = temp;
        }
        for (let i = 0; i < number; i++) {
            console.log(a[i]);
        }
    }
    catch (err) {
        console.log(err);
    }
}
/*
Merge Sort
*/
//Merges two subarrays of arr[]
//first subarray is arr[1..m]
//second subarray is arr[m+1..r]
/**
 * 
 * @param {*} unsortedArray 
 * @param {*} low 
 * @param {*} mid 
 * @param {*} high 
 */
function merge(unsortedArray, low, mid, high) {
    //Find size of two subbarray to be merged
    var lengthOne = mid - low + 1;
    var lengthTwo = high - mid;

    /*Create temporary arrays*/
    const leftArray = new Array(lengthOne);
    const rightArray = new Array(lengthTwo);

    /*Copy data to temporary arrays*/
    for (let i = 0; i < lengthOne; ++i)
        leftArray[i] = unsortedArray[low + i];
    for (let j = 0; j < lengthTwo; ++j)
        leftArray[i] = unsorteddArray[mid + 1 + j];

    /*Merg the temporary arrays
    
    /*Intialize indexes of first and csecond array*/
    var i = 0, j = 0;

    /*Intialize index of merged array*/
    var k = low;
    while (i < lengthOne && j < lengthTwo) {
        if (leftArray[i].localeCompare(rightarray[j]) <= 0) {
            unsortedArray[k] = leftArray[i];
            i++;
        }
        else {
            unsortedArray[k] = rightArray[j];
            j++;
        }
        k++
    }

    /* Copy remaning element of L[] if any */
    while (i < lengthOne) {
        unsortedArray[k] = leftArray[i];
        i++;
        k++;
    }

    /* Copy remaining elements of R[] if any */
    while (j < lengthTwo) {
        unsortedArray[k] = rightArray[j];
        j++;
        k++;

    }
}


//returns sorted array
/**
 * 
 */
exports.mergeSort = (unsortedArray, low, high) => {
    if (low < high) {
        //Find middle point
        var mid = parseInt((low + high) / 2);

        //sort first and second halves
        mergeSort(unsortedArray, low, mid);
        mergeSort(unsortedArray, mid + 1, high);

        //merge the sorted halves
        merge(unsortedArray, low, mid, high);
    }
    return unsortedArray;
}

/*
permution 
 */
exports.getAllPermutation = (string) => {
    var results = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }
}

for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    let charsLeft = string.substring(0, i) + string.substring(i + 1);
    var innerpermutations = getAllpermuation(charsLeft);
    for (let j = 0; j < innerpermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
    }
}
return results;
