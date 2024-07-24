
// get values from each #id of username, title and content 
const formElement = document.querySelector('#form'); // query selector 

 //const username = document.getElementById('username').value;
 //const title= document.getElementById('title').value;
 //const content= document.getElementById('content').value;  // add all of these consts into a single variable and push into const newInput// //
 

 function submitForm(event)
 { event.preventDefault();
    const blogArray= JSON.parse(localStorage.getItem('blogArray'))|| []; // array to hold if the are localStorage and the [] is if there were not an array will be created  
    const username = document.getElementById('username').value; // .value to get the value of element by id in html username
    const title= document.getElementById('title').value; // .value to get the value of the elemment by id in html title 
    const content= document.getElementById('content').value; // .vale to target the value of the element by id in html content
    
    const blogObject={
        username: username, 
        title: title,
        content: content,
    }
blogArray.push(blogObject);
localStorage.setItem('blogArray',JSON.stringify(blogArray))
 
//username.value ="";
//title.value="";
//content.value="";
 document.location.href="blog.html";
}


// the steps below is the draft i had to do 
 //const newForm {username,title,content};
//__.push("empty");
//console.log(newForm);
// add newF =JSON.stringfy()  // to be able to store it into local.Storage
//localStorage.()

document.addEventListener('submit',submitForm);
console.log(window.document);




