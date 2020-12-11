exports.rollDices = (req, res) => {
    var diceList = [];
    var hist = '';
    var sum = 0;
    var dices = []

    diceList = req.body.dices;
    console.log(diceList);

    diceList.forEach((dice) => {
        for(let i = 0; i < dice.qty; i++) {
            let roll = Math.floor(Math.random() * dice.faces) + 1;
            
            sum += roll;
            hist += `${roll} (d${dice.faces}) + `;
            dices.push({
                faces: dice.faces,
                value: roll
            });
        }        
    });

    let opsAux = hist.split('');
    opsAux.splice(opsAux.length - 3, 3);
    hist =  opsAux.join('') + ` = ${sum}`;

    res.status(200).json({sum, hist, dices});
}