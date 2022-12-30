var animationElements = document.querySelectorAll('.show-on-scroll');


function toggleAnimationElementWindow(element) {

    //1 element
    var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;

    //check xem element có bên trong màn hình hay không
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }
}


function checkAnimation() {

    animationElements.forEach(element => {
        toggleAnimationElementWindow(element);
    })

}

window.onscroll = checkAnimation