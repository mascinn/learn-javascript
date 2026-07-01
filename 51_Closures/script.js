// closures = a function defined inside of another function,
//            the inner function has access to the variables
//            and scope of the outer function.
//            Allow for private variables and state maintenance
//            Used frequently in JS frameworks: React, Vue, Angular

function increment(){
    let countt = 0;
    countt++;
    console.log(`Counter increased to ${countt}`);
}

increment();
increment();
console.log(`\n`);

//
function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`count is increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current counter is ${counter.getCount()}`);
console.log(`\n`);

//
function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(7);
game.decreaseScore(3);
console.log(`The final is ${game.getScore()}`);