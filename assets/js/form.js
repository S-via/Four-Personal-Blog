
// get values from each #id of username, title and content 
const formElement = document.querySelector('#form');

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


 //const newForm {username,title,content};
//__.push("empty");
//console.log(newForm);
// add newF =JSON.stringfy()  // to be able to store it into local.Storage
//localStorage.()

document.addEventListener('submit',submitForm);
console.log(window.document);




