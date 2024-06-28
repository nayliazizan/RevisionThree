//Write a function named createCounter that returns another function. The returned 
//function should increase a counter variable by 1 each time it is called and print 
//the current count. Demonstrate how the counter works by calling it multiple times.

const createCounter = () => {
    let counter = 0;
    const inner = () => {
        counter += 1;
        return counter;
    }
    return inner;
}

let get_func_inner = createCounter();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());