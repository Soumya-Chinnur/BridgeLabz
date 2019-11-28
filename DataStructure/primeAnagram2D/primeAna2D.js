/********************************************* 
*@purpose : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
*           Store the prime numbers in a 2D Array, the first dimension represents the range 0-100,              
*           100-200, and so on. While the second dimension represents the prime numbers in that range. 
*@file    :primeAnagramInTwoD.js
*@author  :Soumya Chinnur
**********************************************/
let util= require('../../Utility/algorithmUtility');
var initial=0;
var limit=100;
var primeArray=new Array(10);
var anagramPrimeArray=new Array(10);
var notAnagramPrimeArray=new Array(10);
var anagram=[];
var notAnagram=[];
for(let i=0;i<10;i++)
{
   // primeArray[i]=util.generatePrimeNumbers(initial,limit);
    anagramPrimeArray[i]=util.anagramPrime(util.generatePrimeNumbers(initial,limit));
    notAnagramPrimeArray[i]=util.notAnagramPrime(util.generatePrimeNumbers(initial,limit));
    anagram=[];
    notAnagram=[];
    initial=initial+100;
    limit=limit+100;

}
//print the array
var initial=0;
var limit=100;
for(let i=0;i<10;i++)
{
    console.log("Anagram ["+initial+","+limit+"] : "+anagramPrimeArray[i]);
    console.log("Not Anagram ["+initial+","+limit+"] : "+notAnagramPrimeArray[i]);
    initial=initial+100;
    limit=limit+100;
}
