exports.primeGenerate=(n)=>
{ 
    var primeArray=[];
    for(var i = 1; i<=n; i++)
    {
        var temp = 0;
        for(var j = 2; j<=i-1 ;j++)
        {
            if(i%j==0)
            {
                temp = temp + 1;
            }
        }
            if(temp == 0)
            {
                //console.log(i)
               primeArray.push(i);
            }
    }
    return primeArray
}
exports.anagramprime = (primeArray)=>
{
    var anagram=[];
for(let j = 0; j<primeArray.length; j++)
{
    for(let k = j + 1; k<primeArray.length; k++)
    {
        if(checkAnagram(primeArray[j], primeArray[k])){
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
checkAnagram = (numberOne, numberTwo)=>{
    numberOne = ''+numberOne;
    numberTwo = ''+numberTwo;
    numberOneArray = numberOne.split('');
    numberTwoArray = numberTwo.split('');
    numberOneArraySort = this.bubbleSort(numberOneArray);
    numberTwoArraySort = this.bubbleSort(numberTwoArray);
    if(numberOneArraySort.join() == numberTwoArraySort.join())
    return true;
    return false;
}
/*
*bubblesort
*/
exports.bubbleSort=(a)=>
{
  //  var a = [36, 19, 29, 12, 5];
    var temp;
    for(var i=0; i<a.length; i++)
    {
        for(var j=0; j<a.length-1-i; j++)
        {
            var flag = 0;
            if(a[j]>a[j+1])
            {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                flag = 1;
            }

        }
        if(flag==0)
        {
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
            var s1 = str1.split("");//splits the given string into array of string by separting substrings using separator
            var s2 = str2.split("");
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
        var li = 0;
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
exports.bubbleSort = (n) => {
    var a = [36, 19, 29, 12, 5];
    var temp;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            var flag = 0;
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
    for (var i = 0; i < a.length; i++) {
        console.log(a[i] + " ");
    }
}
/*
Insertion sort
*/
exports.insertionSort = (n) => {
    try {
        var a = [5, 1, 6, 2, 4, 3];
        var temp, j;
        for (var i = 1; i < n; i++) {
            temp = a[i];
            j = i;
            while (j > 0 && a[j - 1] > temp) {
                a[j] = a[j - 1];
                j = j - 1;
            }
            a[j] = temp;
        }
        for (var i = 0; i < n; i++) {
            console.log(a[i]);
        }
    }
    catch (err) {
        console.log(err);
    }
}
