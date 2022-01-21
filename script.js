// let i = "#"

for (let i = ""; i < "########"; i+= "#") {
    console.log(i);
}


for (let v = 1; v <= 100; v++) {
    if ((v % 3 === 0) && (v % 5 ===0)){
        console.log("FizzBuzz");}
    else if (v % 3 === 0) {
        console.log("Fizz");} 
    else if (v % 5 === 0) {
        console.log("Buzz");}
    else {
        console.log(v);
    }
}

for (let j = 0; j < 8; j++) {
    for (let k = 0; k <  8; k++) {
        console.log(`linea ${j}`, `carattere ${k}`); 
    };
}


let grid = ""

for (let j = 0; j < 8; j++) {
    for (let k = 0; k < 8; k++) {
        if ((k + j) % 2 === 0){
            grid += " "}
        else { grid += "#"}
    };
    grid += ("\n")
}
console.log(grid);

//******************************************OPPURE**********************/

let chess = "";
let size = 8;

for (let j = 0; j < 8; j++) {
    for (let k = 0; k < 8; k++) {
        if (i%2===0){
            if (j%2===0){
                grid+="";
         }  else { 
                grid+="#";
         }
       }else{
        if (j%2===0){
            grid+="#";
       }else { 
            grid+="";    
       }
    }
}
grid="";
}
console.log(grid);


//**********************************OPPURE***********************************************/
let grid2 = "";
let size2 = 20;

for (let i = 0; i < size2; i++) {
    for (let j = 0; j < 8; k++) {
        grid2 += (i % 2===0) ? ((j % 2===0) ?  "" : "#") : ((j % 2===0) ?  "#" :  " ");
    } 
    grid2 += "\n"
}
console.log(grid2);