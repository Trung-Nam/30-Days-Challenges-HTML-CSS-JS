var range = document.querySelector('.range');
var process = document.querySelector('.process');
var value = document.querySelector('.process span');
var body = document.querySelector('body')

function updateProcess(percent){
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`;
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}

range.addEventListener('mousemove',function(e) {
    var processWith = e.pageX - this.offsetLeft;
    var percent = processWith / this.offsetWidth * 100;
    percent =Math.round(percent);
    updateProcess(percent);
});

updateProcess(30);
