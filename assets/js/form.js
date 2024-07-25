
// get values from each #id of username, title and content 
const formElement = document.querySelector('#form'); // query selector to to target #form in document html

 //const username = document.getElementById('username').value;
 //const title= document.getElementById('title').value;
 //const content= document.getElementById('content').value;  // add all of these consts into a single variable and push into const newInput// //
 

 function submitForm(event) // added a function , which function will be to store arrays and submit to local storage, event.preventdefault to prevent form form to be recieved
 { event.preventDefault();
    const blogArray= JSON.parse(localStorage.getItem('blogArray'))|| []; // array to hold if the are localStorage and  the [] is if there were not an array will be created  
    const username = document.getElementById('username').value; // .value to get the value of element by id in html username
    const title= document.getElementById('title').value; // .value to get the value of the elemment by id in html title 
    const content= document.getElementById('content').value; // .vale to target the value of the element by id in html content
    
    const blogObject={ // object with keys to get the .value from const username, titile ,content 
        username: username, 
        title: title,
        content: content,
    }
blogArray.push(blogObject); // pushing everything in blogObject into blogArray
localStorage.setItem('blogArray',JSON.stringify(blogArray)) // .JSON stringify added at the end with .set items to store blogArray which is holding all of the data and localStorage 
 
//username.value ="";
//title.value="";
//content.value="";
 document.location.href="blog.html"; // another way to direct to page is using window.location.href="blog.html";
}



document.addEventListener('submit',submitForm); // .addEventListner too submit form from document
console.log(window.document);


// the steps below is the draft i did before

//const newForm {username,title,content};
//__.push("empty");
//console.log(newForm);
// add newF =JSON.stringfy()  // to be able to store it into local.Storage
//localStorage.()



