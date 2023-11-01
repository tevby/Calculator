let rootElement = document.querySelector('body');
let toogle = document.querySelector('.toogle-checkbox');
let output = document.getElementById('output');
let btn = document.querySelector('button');

toogle.addEventListener('click', function(){
    if(toogle.checked === true){
        rootElement.classList.add("lightmode")
    }
    else{
        rootElement.classList.remove("lightmode")
    }
})
