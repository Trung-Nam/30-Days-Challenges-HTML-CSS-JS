var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');

btnSuccess.addEventListener('click', function () {
    createToast('success',2000);
});

btnWarning.addEventListener('click', function () {
    createToast('warning',2000);
});
btnError.addEventListener('click', function () {
    createToast('error',2000);
});

function createToast(status,timeout) {
    let templateInner = '';
    switch (status) {
        case 'success':
            templateInner =
                `
            <i class="fa-solid fa-check"></i>
            <span class="message">This is a success message</span>
            `
            break;
        case 'warning':
            templateInner =
                `
            <i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a warning message</span>
            `
            break;
        case 'error':
            templateInner =
                `
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a error message</span>
            `
            break;
    }

    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML =  `
    ${templateInner}
    <div class="countdown"></div>
    `
    var toastList = document.getElementById('toasts');
    toastList.appendChild(toast);


    setTimeout(function() {
        toast.style.animation = 'slidehide 1.5s ease-in-out forwards';
    },timeout);

    setTimeout(function() {
        toast.remove();
    },timeout + 2000);
}