// setTimeout() = function in javascript that allows you to schedule 
//                the execution of the function after an amount of time (milliseconds)
//                Times are aproximate (varied based on the workload of the Javascript runtime .env)
//                setTimeout(callback, delay);

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}