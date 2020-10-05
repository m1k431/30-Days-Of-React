/*jshint esversion: 6 */
console.log('pays: ' + countries);
console.log('techs: ' + webTechs);

//no punctuation to array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, REACT, Python';

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
const textPasPonctue = text.replace(regex, '');

let tabText = textPasPonctue.split(' ');
console.log(tabText);

//add remove edit item
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart[2] = 'Green Tea';

//add before
shoppingCart.splice(0, 0, 'Meat');

//add at end
shoppingCart.push('Sugar');

console.log(shoppingCart);

function ethiopia(pays) {
  return pays == 'Ethiopia';
}

console.log(countries.find(ethiopia));

function sass(techs) {
  return (techs == 'Sass');
}

if (webTechs.find(sass) == undefined) {
  console.log('Sass is a CSS preprocessor');
  webTechs.push('Sass');
  console.log(webTechs);
}