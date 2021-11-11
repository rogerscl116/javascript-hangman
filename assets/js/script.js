"use strict";

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let categories;         // array of topics
let chosenCategory;     // selected category
let getHint;          // word hint
let word;              // selected word
let guess;             // guess
let geusses = [ ];      // stored guesses
let lives;             // lives
let counter;           // count of correct guesses
let space;              // number of spaces in word

// create alphabet ul
let buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
