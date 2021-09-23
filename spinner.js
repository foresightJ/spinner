// const word = 'hello from spinner1.js... \rheyyy\n'
// // const word = "hello from spinner1.js";
// let counter = 0;

// for (const letter of word) {
//   setTimeout(() => {
//     process.stdout.write(letter);
//   }, counter+= 75)

// }

  
// setTimeout(()=>{
//   console.log()
//   //console.log(counter);
//   }, counter)
// let counter = 0;
// let array1 = ['|', '/', '-', '\'']


// const stylish = function () {
//   for (const bktik of array1) {
//     process.stdout.write(bktik);
//     counter += 2; 
//   }
// }
// stylish();

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// setTimeout(() => {
//   console.log();
// }, 900)

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\r|  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 1400);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1600);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   '); 
}, 1800);