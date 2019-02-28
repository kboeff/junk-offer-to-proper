const checkOffer = () => {
	let input = document.getElementsByClassName('form-control')[0].value;
	let hashtags = input.split('#').length;
	let cSharps = input.split('C#').length;
	let salary = false;
	let keywords = ['salary', 'pay', 'renumeration', 'wage', 'payment', 'заплата', 'заплащане', 'заплати'];
	let rows = document.getElementsByClassName('row');
		
	input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/[\n\r]+/gm," ").split(' ');
	
	for (let i in input) {
		let word = input[i].toLowerCase();
		if (keywords.indexOf(word) !== -1) {
			let j = i;
			while (j < input.length) {
				if (parseInt(input[j]) > 1000 &&
					input[j].indexOf('08') === -1 &&
					input[j].indexOf('2018') === -1 &&
					input[j].indexOf('2019') === -1) {
					salary = true;
					break;
				}
				j++;
			}
		}
	}
	
	if (input == "") {
		console.log('Хабим ток, колега.');
	} else if ((hashtags > 0 && hashtags !== cSharps)  || !salary) {
		rows[0].innerHTML = 'Your offer is not perfect. Please fix the following issues:'
		rows[0].style.color = 'black';
		if (!salary) {
			rows[1].innerHTML = '- No salary found or salary too low.'
		}
		if ((hashtags > 0 && hashtags !== cSharps)) {
			rows[2].innerHTML = '- The amount of hashtags is too high.';
		}
		
	} else {
		rows[0].innerHTML = 'Your offer appears to be OK. Good job.'
		rows[0].style.color = '#51cbce';
		rows[1].innerHTML = '';
		rows[2].innerHTML = '';
	}
}
	