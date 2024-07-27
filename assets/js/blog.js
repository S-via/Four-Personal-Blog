const sunshineSwitch = document.querySelector('#sunshine'); 
const everything = document.querySelector('.everything'); // queryselctor to target div class everything

const blogArray= JSON.parse(localStorage.getItem('blogArray'))|| []; // get item from local storage from blog Array located in form.js
const blogContainer= document.querySelector(".blogcontainer") // added array that containes in blog.html class .blogcontainer

let mode ="light";

sunshineSwitch.addEventListener('click' , function () { // added an event lister to the function with the event of being clicked execute the if statement 
    if (mode === 'light'){ // if mode is stricly equal to light 
    mode='dark'; // set a mode that is dark 

    everything.setAttribute('class', 'dark');} // set attribute class to mode dark in css file 
    
    else { // if not set everything else in mode light 
        mode = 'light';
        everything.setAttribute('class','light');} // set atribute with class in css file 
    });

    let blogCard="" // empty string that will conatin the element in the line below 
for (let blog of blogArray){ // backticks to add a <div> that will contain blog title, blog content , and blog username that will be imported from blog Contaibner and displyed into second page 
blogCard+= `
<div class="blog-card"> 
<h3>${blog.title}</h3>
<p>${blog.content}</p>
<p><i>Posted : ${blog.username}</i></p>
</div>
`
blogContainer.innerHTML=blogCard // the elements blogCard will be linked into blog.html inside the section class="blogcontainer"
}

