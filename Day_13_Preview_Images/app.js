var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')


upload.addEventListener('change', function (e) {

    var file = upload.files[0];

    if ((file.name.endsWith('.jpg') || file.name.endsWith('.png'))) {
        if ((file.size / (1024 * 1024)) > 5) {
            error.innerHTML = `Hình ảnh upload phải nhỏ hơn 5mb`;
        } else {
            var img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            preview.appendChild(img);
        }
    } else {
        error.innerHTML = `Hình ảnh phải ở dạng png,jpg`;
    }

})