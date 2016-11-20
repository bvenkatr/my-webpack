import Pinkyfier from './js/Pinkyfier.js';
import Fattyfier from './js/Fattyfier.js';

let pinkyfier = new Pinkyfier('text'),
	fattyfier = new Fattyfier('text');

pinkyfier.pink();
console.log("venakt");

document.getElementById('fat').onclick = function () {
	fattyfier.fat();
};
