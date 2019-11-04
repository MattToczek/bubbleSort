let array = [23, 14, 38382, 5, 100, 94830, 333, 209, 0, 92];

let temp1;
let temp2;
let newArray = [];
let finished =0;


let forLoop = (array) => {
    finished = 0;                                   //resets counter outside of loop
    for (let i = 0; i < array.length; i++) {        // loops through array and swaps adjacent values
        if(array[i]>array[i+1]){
            temp1 = array[i];
            temp2 = array[i + 1];
            array[i] = temp2;
            array[i + 1] = temp1;
        }
        else{                                       // if [i] < [i +1], couner increases
            finished++
            if (finished == array.length) {         // if it doesn't make a change through the whole loop, the array is in order.
                finished = true;
            }
        }
     
    }
}


let arraynge = (arr)=>{
    
    do {
        forLoop(arr)
    } while (finished != true);                     // loop breaks when counter reaches length of array.
}



arraynge(array)
console.log(array);

/* ======================================================================================================================================================== */
/* ======================================================================================================================================================== */
// Bubble sort w/ letters

let word = 'hello';
let str = word.split('')

arraynge(str)
console.log(str);



