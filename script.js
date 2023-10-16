let time = 1500; // 25 minutes in seconds
let timer;

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('time').innerText = displayTime;
}

document.getElementById('start').addEventListener('click', function () {
    if (timer) {
        clearInterval(timer);
        timer = null;
        this.innerText = 'Start';
    } else {
        timer = setInterval(function () {
            if (time > 0) {
                time--;
                updateDisplay();
            } else {
                clearInterval(timer);
                timer = null;
                alert('Pomodoro session finished!');
            }
        }, 1000);
        this.innerText = 'Pause';
    }
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(timer);
    timer = null;
    time = 1500;
    updateDisplay();
    document.getElementById('start').innerText = 'Start';
});

updateDisplay();
