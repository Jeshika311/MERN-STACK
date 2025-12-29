document.querySelector("#image").addEventListener("click" , function(){
    if (document.querySelector("#image").src.includes("Snap1.jpg")) {
        document.querySelector("#image").src = "Snap2.jpg";
    }
})