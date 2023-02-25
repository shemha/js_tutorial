window.addEventListener("load", function(){
    document.getElementById("btn").addEventListener("click", function(){
        document.getElementById("photo1").style.opacity = 1.0;
        requestAnimationFrame(function(){
            var n = parseFloat(document.getElementById("photo1").style.opacity);
            if(n > 0.05){
                document.getElementById("photo1").style.opacity = n - 0.05;
                requestAnimationFrame(arguments.callee, 25);
            }else{
                document.getElementById("photo1").style.opacity = 0;
            }
        }, 25);
    }, true);
});