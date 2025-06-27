const ladders = {
    4: 10,
    8: 22,
    21: 21,
    28: 48,
    50: 17,
    71: 21,
    80: 19,
};

const snakes = {
    32: -22,
    36: -30,
    48: -22,
    62: -44,
    88: -64,
    95: -39,
    97: -19,
};

function nextPosition(current, dice) {
    let next = current + dice;

    if (ladders[next] !== undefined) {
        next += ladders[next];
    } else if (snakes[next] !== undefined) {
        next += snakes[next];
    }

    return next;
}

const diceRolls = [3, 4, 3, 5, 1];

let start = 1;

diceRolls.forEach((dice) => {
    const next = nextPosition(start, dice);
    console.log(`from=${start}, dice=${dice}, next=${next}`);
    start = next;
});
