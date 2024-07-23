
// get values from each #id of username, title and content 
const formElement = document.querySelector('form');

 //const username = document.getElementById('username').value;
 //const title= document.getElementById('title').value;
 //const content= document.getElementById('content').value;  // add all of these consts into a single variable and push into const newInput// //
 
 function submitForm(event)
 { event.preventDefault();
    const username = document.getElementById('username').value;
    const title= document.getElementById('title').value;
    const content= document.getElementById('content').value;
console.log(username,title,content);
 }


//if (username && title && content ) 

//const newInput = {username,title,content};

//input.push(newInput);



// add newInput=JSON.stringfy()   to be able to store it into local.Storage

//localStorage.()





formElement.addEventListener('submit',submitForm);
console.log("window.document:");
console.log(window.document); 

