//var, let, const
// let habibat = 'water';
// let season = 'winter';
// let colors ='yellow';

const myForm = document.querySelector('#my-form');
let result = document.querySelector('.result');
const habitatInput = document.querySelector('#habitat');
const seasonInput = document.querySelector('#season');
const colorInput = document.querySelector('#color');

let xhr = new XMLHttpRequest();
let url = "my.php";

xhr.open("POST", url, true);

xhr.setRequestHeader("Content-Type", "application/json");


myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();
    console.log(habitatInput.value);
    console.log(seasonInput.value);
    console.log(colorInput.value);
}




// let parameter = {
//     habitat:'water',
//     season:'winter',
//     colors:'yellow'
// }
//console.log(parameter.season);

//conver to jason and send to server
// const parameterJSON = JSON.stringify(parameter);
//console.log(parameterJSON);