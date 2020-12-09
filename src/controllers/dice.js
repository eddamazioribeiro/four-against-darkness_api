exports.rollDices = (req, res) => {
    let diceList = [];
    let operations = '';
    var result = 0;

    diceList = req.body.dices;
    console.log(diceList);

    diceList.forEach((dice) => {
        for(let i = 0; i < dice.qty; i++) {
            let roll = Math.floor(Math.random() * dice.type) + 1;
            
            result += roll;
            operations += `${roll} (d${dice.type}) + `;
        }        
    });

    let opsAux = operations.split('');
    opsAux.splice(opsAux.length - 3, 3);
    operations =  opsAux.join('') + ` = ${result}`;

    res.status(200).json({result, operations});
}