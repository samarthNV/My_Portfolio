const classBtn = document.querySelectorAll('.controlClass');
const btns = document.querySelectorAll('.control')

function btnTransition(){
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })
    }
}

btnTransition();