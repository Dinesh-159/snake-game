const box = document.getElementById('box');


function move(e) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight; 

    const rect = box.getBoundingClientRect();

    /* ArrowLeft */
    // Check is e.Code is ArrowLeft - Done
    // Check i left is 0 - Done
    // If true, move to other end - Done
    // if false, subtract 12px - Done
    if (e.code === "ArrowLeft") {
        if (rect.left <= 0) {
            box.style.left = (screenWidth - 12) + 'px';
        } 
        
        else {
            box.style.left = (rect.left - 12) + 'px';
        }
    }

    /* ArrowRight */
    // Check is e.Code is ArrowRight
    // Check if right is equal to screenwidth 
    // If true, set left to 0 px
    // if false, add 12px to left

    if (e.code === "ArrowRight"){
        if(rect.right >= screenWidth){
            box.style.left = (0) + 'px'; 
        }
        else{
            box.style.left = (rect.left + 12) + 'px'; 
        }
    }

    /* ArrowTop */
    // Check is e.Code is ArrowUp
    // Check if top is 0
    // If true, subtact screenHeight with 12px
    // Else, subract 12px to top
    if (e.code === "ArrowUp") {
        if (rect.top <= 0) {
            box.style.top = (screenHeight - 12) + 'px';
        } 
        
        else {
            box.style.top = (rect.top - 12) + 'px';
        }
    }

    /* ArrowBottom */
    // Check is e.Code is ArrowDown
    // Check if bottom is equal to screenHeight
    // If true, set top to 0px
    // Else, add 12px to top

    if(e.code === "ArrowDown"){
        if(rect.bottom >= screenHeight){
            box.style.top = (0) + 'px';
        }

        else{
            box.style.top = (rect.top + 12 ) + 'px';
        }
    }

}    

let evt;

document.addEventListener('keyup', (e) => {
      evt = e;
});

setInterval(function() {
    if(evt) {
        move(evt);
    }
}, 100);

/*button functionality */

//check if clicked
// box position should be in center 
//true change to stop and change bg to red
//else let it remain with start with bg green
//when clicked on stop box should stop moving 
//stop to change to start

strtbutton.addEventListener("click",function(){
    if(strtbutton.innerHTML === "START"){
        strtbutton.innerHTML = "STOP";
        strtbutton.style.backgroundColor = 'red';
        box.style.display = 'block';

    }
    else{
        strtbutton.innerHTML = "START";
        strtbutton.style.backgroundColor = 'rgb(33, 245, 6)';
        evt = 'false';
    }

    
   


});


