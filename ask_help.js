
document.getElementById('image').addEventListener('change', function (event) {
    const imagePreview = document.getElementById('image-preview');
    const previewImg = document.getElementById('preview-img');

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        previewImg.src = '';
        previewImg.style.display = 'none';
    }
});
