const button = document.querySelector("button")!;
let appId = 'abc'

function add1(n1, n2){
    if(n1 + n2 > 0){
        return n1 + n2;
    }
}

function clickHandler(message: string, age: number) {
    console.log(message, age);
}

if (button){
    button.addEventListener("click", clickHandler.bind(null, "Nice and easy!", 10));
}
