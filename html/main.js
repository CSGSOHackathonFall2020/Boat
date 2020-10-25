function sendJSON(){ 
               
    let result = document.querySelector('.result'); 
    const habitatInput = document.querySelector('#habitat');
    const seasonInput = document.querySelector('#season');
    const colorInput = document.querySelector('#color'); 
       
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = "my.php"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 

            // Print received data from server 
            result.innerHTML = this.responseText; 

        } 
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "habitatInput": habitatInput.value, 
                                "seasonInput": seasonInput.value, 
                                "colorInput": colorInput.value}); 

    // Sending data with the request 
    xhr.send(data); 
} 


// //var, let, const
// // let habibat = 'water';
// // let season = 'winter';
// // let colors ='yellow';

// const myForm = document.querySelector('#my-form');
// let result = document.querySelector('.result');
// const habitatInput = document.querySelector('#habitat');
// const seasonInput = document.querySelector('#season');
// const colorInput = document.querySelector('#color');

// let xhr = new XMLHttpRequest();
// let url = "my.php";

// xhr.open("POST", url, true);

// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         result.innerHTML = this.responseText;
//     }
// };

// myForm.addEventListener('submit', onSubmit);


// function onSubmit(e){
//     e.preventDefault();
//     console.log(habitatInput.value);
//     console.log(seasonInput.value);
//     console.log(colorInput.value);
// }




// // let parameter = {
// //     habitat:'water',
// //     season:'winter',
// //     colors:'yellow'
// // }
// //console.log(parameter.season);

// //conver to jason and send to server
// // const parameterJSON = JSON.stringify(parameter);
// //console.log(parameterJSON);