const sunshineSwitch = document.querySelector('#sunshine'); 
const everything = document.querySelector('.everything'); // queryselctor to target div class everything

const blogArray= JSON.parse(localStorage.getItem('blogArray'))|| []; // get item from local storage from blog Array located in form.js
const blogContainer= document.querySelector(".blogcontainer") // added array that containes in blog.html class .blogcontainer

let mode ="light";

sunshineSwitch.addEventListener('click' , function () {
    if (mode === 'light'){
    mode='dark';

    everything.setAttribute('class', 'dark');}
    
    else {
        mode = 'light';
        everything.setAttribute('class','light');}
    });

    let blogCard=""
for (let blog of blogArray){
blogCard+= `
<div class="blog-card">
<h3>${blog.title}</h3>
<p>${blog.username}</p>
<p>${blog.content}</p>
</div>
`
blogContainer.innerHTML=blogCard
}
