// generate a random colour

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalID;

const startChangingColor = function() {

    if(!intervalID){
        intervalID = setInterval(changeBgColor, 200)
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function() {
    clearInterval(intervalID);
    intervalID = null;  
};

document.querySelector("#start").addEventListener('click' , startChangingColor)
document.querySelector("#stop").addEventListener('click' , stopChangingColor)