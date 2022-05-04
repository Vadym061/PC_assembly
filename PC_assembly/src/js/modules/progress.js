export function progress(){
    let timeLeft = 40000;
    let downloadTimer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(downloadTimer);
        }
        document.getElementById('progressBar').value = 40000 - timeLeft;
        timeLeft -= 300;
    }, 100);
}