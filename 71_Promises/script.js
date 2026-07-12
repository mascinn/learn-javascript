// Promise = An objects that manage asynchronous operations.
//           Wrap a Promise Object around (asynchronouus code)
//           "I Promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

// DO THOSE IN ORDERS

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked){
                resolve("You walk the dog 🐕");
            } else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleande = true;

            if(kitchenCleande){
                resolve("You clean the kitchen 🧹");
            } else{
                reject("You DIDN'T clean the kitchen");
            }

        }, 2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;

            if(dogWalked){
                resolve("You take out the trash 🗑️");
            } else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You are finished all the chores")})
         .catch(error => console.error(error));