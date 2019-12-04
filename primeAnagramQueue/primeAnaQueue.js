/*******************************************************************************************
 * @purpose : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue 
 *            using the Linked List and Print the Anagrams from the Queue. Note no
 *            Collection Library can be used.
 * @Author : Soumya Chinnur
 * @file : primeAnaQueue.js
 **********************************************************************************/
const primeAnagram = require('../../Functional/PrimeAnagram');
const primeAnaQueue = require('../primeAnagramQueue/primeAnaQueueBL');
try {
  let queueLink = new primeAnaQueue.QueuedLinkedList;
    const primes = [];
    const initial = 0;
    const final = 1000;
    primes = primeAnagram.findAnaPrime(initial, final);
    for (let i = 0; i < primes.length; i++) {
        queueLink.enque(primes[i]);
    }
    queueLink.display();
}
catch (error) {
    console.log(error);
}
