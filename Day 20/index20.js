console.log("Class 20");
//------Array Methods----MAP------

let ranks = [1, 2, 3, 4, 5, 6];

console.log(
    ranks.map((e, index) => {
        return e * 100;
    })
);

console.log(ranks.map((e,index) => e + 1));   //map 

let newarr = ranks.map((e,index) =>{
    console.log(e);
    if (e%2===0)
        return e
})
console.log(newarr);

//------Array Methods----Filter------

// let ranks = [1, 2, 3, 4, 5, 6];

let newfilterarrr = ranks.filter((e,index) =>{
    
    if (e%2===0)
        return e
})
console.log(newfilterarrr);


//------Object Methods----Promise------

let concert = false;
let attendConcert = new Promise(function(resolve,reject){
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT")
        }
        else{
            reject("BOB FAILED TO ATTENDED THE CONCERT")
        }
    },2000);
});

// console.log(attendConcert);

// attendConcert.then((data) => console.log(data)).catch((error) => console.log(error));
/*

//----------async--------------------------------------

async function afunc(){
    try {                                   //try-catch error handling method is used
        let results = await attendConcert;
        console.log(results);
    }
    catch(e) {
        console.log(e);
    }

}
afunc();
*/

//-----Arror function of the above function

let asyncfuncname = async() => {
    try {                                   //try-catch error handling method is used
        let results = await attendConcert;
        console.log(results);
    }
    catch(e) {
        console.log(e);
    }
}
asyncfuncname();