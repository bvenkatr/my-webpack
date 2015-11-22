var Fattyfier = require('./Fattyfier'),
		Pinkyfier = require('./Pinkyfier'),
		pinkyfier = new Pinkyfier('text'),
		fattyfier = new Fattyfier('text');

pinkyfier.pink();

document.getElementById('fat').onclick = function () {
	fattyfier.fat();
};
