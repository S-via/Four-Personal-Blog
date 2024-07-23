
// get values from each #id of username, title and content 
const formElement = document.getElementById('#form');

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
 //const newForm
//__.push("newForm");
//console.log(newForm);
// add newInput =JSON.stringfy()  // to be able to store it into local.Storage
//localStorage.()

form.addEventListener('submit',submitForm);
console.log(window.document);


