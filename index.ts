#!usr/bin/env node                 // shebang for the terminal to run the code.

import inquirer from 'inquirer'; // import the inquirer module which is a command line interface for Node js

import chalk from 'chalk';      // import chalk module to give color in the console.


const answers :{sentence:string}      
= await inquirer .prompt (
    [
    {
    name:"sentence",
    type:"input",
    message:"Enter the sentence to count the words:",
}
]
);
const words = answers.sentence.trim().split(" ");              
// trim() is a method that removes whitespaces from the starts and ends of string.
// split() is a method that splits/segregates/separates the string into an array of substrings.

console.log(`There are ${words.length} words in the sentence`);// print the number of words in the sentence

console.log(words);      // print the word in the form of an array in console



