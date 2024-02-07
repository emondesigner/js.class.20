// COLOR CHANGE START
let btn = document.querySelector('.btn');
let colorChange = document.querySelector('#colorChange');

btn.addEventListener('click',function(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    colorChange.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`;
})
// COLOR CHANGE END

// EMAIL BOX SECTION START
let Form1 =document.querySelector('#Form1');
let Form2 =document.querySelector('#Form2');
let Form3 =document.querySelector('#Form3');

let next1 = document.querySelector('#next1');
let next2 = document.querySelector('#next2');
let back1 = document.querySelector('#back1');
let back2 = document.querySelector('#back2');


next1.onclick = function(){
    Form1.style.marginLeft = "-400px";
    Form2.style.marginLeft ="20px";
}

back1.onclick = function(){
    Form1.style.marginLeft ="20px";
    Form2.style.marginLeft ="400px";
}
next2.onclick = function(){
    Form2.style.marginLeft ="-400px";
    Form3.style.marginLeft ="20px";
}
back2.onclick = function(){
    Form3.style.marginLeft ="400px";
    Form2.style.marginLeft ="20px";
}
// EMAIL BOX SECTION END

// SCROLL SECTION START
let scrollBtn = document.querySelector('.scrollBtn')
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 300){
        scrollBtn.classList.add('show')
    }
    else{
        scrollBtn.classList.remove('show')
        
    }
})
// SCROLL SECTION END





