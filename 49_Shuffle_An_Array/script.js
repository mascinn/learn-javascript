// Shuffle an Array with Fisher-Yates Algorithm

const cards = ['A', 'J', 'Q', 'K', 2, 3, 4, 5, 6, 7, 8, 9];

// cards.sort(() => Math.random() - 0.5);
// console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * i);

        [array[i], array[random]] = [array[random], array[i]];
    }
    
}

shuffle(cards);
console.log(cards);