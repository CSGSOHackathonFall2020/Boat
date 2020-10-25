//var, let, const
// let habibat = 'water';
// let season = 'winter';
// let colors ='yellow';

const myForm = document.querySelector('#my-form');
const habitatInput = document.querySelector('#habitat');
const seasonInput = document.querySelector('#season');
const colorInput = document.querySelector('#colors');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(habitatInput.value);
}



let parameter = {
    habitat:'water',
    season:'winter',
    colors:'yellow'
}
//console.log(parameter.season);

//conver to jason and send to server
const parameterJSON = JSON.stringify(parameter);
//console.log(parameterJSON);