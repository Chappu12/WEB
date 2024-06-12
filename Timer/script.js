document.addEventListener('DOMContentLoaded',function(){
    let timer = document.getElementById('p');
    let btn1min = document.getElementById('one');
    let btn2min = document.getElementById('five');
    let btn3min = document.getElementById('ten');
    let countdownInterval;

    function updateTimer(timeLeft){
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startTimer(duration){
        let timeLeft = duration;

        if(countdownInterval){
            clearInterval(countdownInterval);
        }

        updateTimer(timeLeft);
        countdownInterval = setInterval(function(){
            timeLeft--;
            updateTimer(timeLeft);
            if(timeLeft <= 0){
                clearInterval(countdownInterval);
                alert('Times up')
            }

        },1000);
    }

    btn1min.addEventListener('click',function(){
        startTimer(60);
    });

    btn2min.addEventListener('click',function(){
        startTimer(300);
    });

    btn3min.addEventListener('click',function(){
        startTimer(600);
    })

});