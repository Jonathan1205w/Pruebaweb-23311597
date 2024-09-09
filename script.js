document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('change-image');
    const image = document.getElementById('skate-image');

    button.addEventListener('click', () => {
        if (image.src.includes('patineta.jpg')) {
            image.src = 'image/patineta2.jpg'; 
        } else {
            image.src = 'image/patineta.jpg'; 
        }
    });
});
