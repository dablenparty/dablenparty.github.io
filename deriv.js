//JavaScript version of derivative program (so it can be run in Chrome cause i'm lazy and dont wanna import a python interpreter)

function deriv(){
    let gay = prompt('art thou gay');
    let text = document.getElementById('is-gay');
    if (gay === "yes"){
        text.style.display = "block";
        text.innerHTML = 'thou art not gay'
    }
    else{
        text.style.display = "block";
        text.innerHTML = 'thou art gay';
    }
    if (gay === "no"){
        text.style.display = "block";
        text.innerHTML = 'thou art lying'
    }
}