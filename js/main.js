import Pinkyfier from './Pinkyfier.js';
import Fattyfier from './Fattyfier.js';

let pinkyfier = new Pinkyfier('text'),
		pattyfier = new Fattyfier('text');

pinkyfier.pink();

document.getElementById('fat').onclick = function () {
	fattyfier.fat();
};
