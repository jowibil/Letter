const fs = require("fs");
const path= require("path");

function generateRandomArray(length=10,min=1,max=99){

    return Array.from({length},()=>
        Math.floor(Math.random()*(max-min+1)+min)

    );

}

function generateRandomString(){
    
    const basewords=[
        ["Strainer", "Retains", "Retinas"],
        ["Stop", "Pots", "Spot", "Opts", "Tops"],
        ["Stream", "Master", "Tamers","Armets"],
        ["Rat", "Tar", "Art"],
        ["Slate", "Stale", "Steal", "Least", "Teals"]
    ];

        const row= Math.floor(Math.random()*6);


    


}