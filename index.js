// EXAMPLE 1 - Get the Last Word of a String in JavaScript

const str = 'An example sentence';

const lastWord = str.split(' ').pop();
console.log(lastWord); // 👉️ sentence

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Last Word of a String using string indexing

// const str = 'An example sentence';

// const arr = str.split(' ');
// console.log(arr); // 👉️ ['An', 'example', 'sentence']

// const lastWord = arr[arr.length - 1];
// console.log(lastWord); // 👉️ sentence

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Last Word of a String using `String.slice()`

// const str = 'An example sentence';

// const lastWord = str.slice(str.lastIndexOf(' ') + 1);
// console.log(lastWord); // 👉️ sentence
