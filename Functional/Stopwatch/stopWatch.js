/*************************************************StopWatch*********************************
 * @purpose:StopWatch program for measuring the time elapses between the start and end clicks
 * @author:Soumya Chinnur
 * @file:stopWatch.js
 * @since:16-10-2019
 *********************************************************************************************/
const take = require("../Stopwatch/stopWatchBl")
const read = require('readline-sync')
const start1 = read.question("Enter 1 to start");
const stop1 = read.question("Enter 0 to stop");
take.stopWatch(start1, stop1);//passing arguments