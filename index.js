import Pinkyfier from './js/Pinkyfier.js';
import Fattyfier from './js/Fattyfier.js';
import {name} from "@project1/testData.js";

let pinkyfier = new Pinkyfier('text'),
	fattyfier = new Fattyfier('text');

pinkyfier.pink();
console.log(name);

document.getElementById('fat').onclick = function () {
	fattyfier.fat();
};
