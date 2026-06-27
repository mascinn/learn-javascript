// callback = a function that is passed as an argument to another function and is executed after some operation has been completed.

function hello(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function goodbye() {
    console.log('Goodbye!');
}

hello('Alice', goodbye);