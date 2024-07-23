const sunshineSwitch = document.querySelector('#sunshine');
const everything = document.querySelector('.everything');

let mode ="light";

sunshineSwitch.addEventListener('click' , function () {
    if (mode === 'light'){
    mode='dark';

    everything.setAttribute('class', 'dark');}
    
    else {
        mode = 'light';
        everything.setAttribute('class','light');}
    });


