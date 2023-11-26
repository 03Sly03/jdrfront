const RollDice = (dice = 6, multiplier = 1) => {
    let result = Math.ceil(Math.random() * dice) * multiplier;
    console.log("result", result);

    return result;
}

export default RollDice;