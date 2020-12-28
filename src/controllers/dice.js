exports.rollDices = (req, res) => {
	var diceList = [];
	var hist = '';
	var sum = 0;
	var dices = []

	diceList = req.body.dices;

	if(diceList == undefined || diceList.length == 0) {
		res.status(400).json({message: `No dice(s) informed`});
	}

	diceList.forEach((dice) => {
		if(this.isDiceValid(dice)) {
			for(let i = 0; i < dice.qty; i++) {
				let roll = Math.floor(Math.random() * dice.faces) + 1;
				
				sum += roll;
				hist += `${roll} (d${dice.faces}) + `;
				dices.push({
					faces: dice.faces,
					value: roll
				});
			}        
		} else {
			res.status(400).json({message: 'Invalid dice type', dice});
		}
	});

	let opsAux = hist.split('');
	opsAux.splice(opsAux.length - 3, 3);
	hist =  opsAux.join('') + ` = ${sum}`;

	res.status(200).json({sum, hist, dices});
};

exports.isDiceValid = (dice) => {
	if(dice.faces == undefined || dice.faces == 0) {
		return false;
	}

	return true;
};