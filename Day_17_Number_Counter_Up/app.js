var listCounters = document.querySelectorAll('.counter');

function count(el) {
    var numberElement = el.querySelector('.number');
    var to = parseInt(numberElement.innerText);
    var count = 0;
    var time = 100;
    var step = to / time;

    let counting = setInterval(() => {
        count+=step;
        if(count > to) {
            clearInterval(counting);
            numberElement.innerText = to;
        }else{
            numberElement.innerText = Math.round(count);
        }
    }, 1);
}

listCounters.forEach(item => {
    count(item);
})
