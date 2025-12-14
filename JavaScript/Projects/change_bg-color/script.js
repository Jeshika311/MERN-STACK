const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

document.querySelector('#start').addEventListener('click' , function(){
    document.body.style.backgroundColor = randomColor();
})