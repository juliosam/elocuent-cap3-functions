let ex1 = "Ejercicio 1";

console.log(ex1);

let space =" \n  \n  ";

let min = function(argumento1,argumento2){
    if(argumento1>argumento2){
        return argumento2
    }
    else{return argumento1}
}

console.log(min(0,10));
console.log(min(0,-10));

console.log(space);

let ex2 = "Ejercicio 2";

console.log(ex2);

let isEven = function(isIt){
    if(isIt<0){return "??"}
    else if(isIt%2 == 0){return true}
    else { return false}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(0));

console.log(space);

let ex3 = "Ejercicio 3";

console.log(ex3);


let countBs = function(word){

    let NdBs = 0;
    for(let count=0; count<word.length; count++){
        if(word[count]=="B"){
            NdBs = NdBs+1;
        }
    }
    return NdBs
}

console.log(countBs("BaBasonicos BuBa DioB"));




let countChar = function(word,letter){

    let NdBs = 0;
    for(let count=0; count<word.length; count++){
        if(word[count]==letter){
            NdBs = NdBs+1;
        }
    }
    return NdBs
}

console.log(countChar("supercalifragilistico espiralidoso","i"));