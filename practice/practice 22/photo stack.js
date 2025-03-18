const photoStackContainer = document.getElementById('photo-stack-container');
const stackPhoto = document.querySelectorAll('.stack-photo');

let stackPhotoCount = photoStackContainer.childElementCount
let zindex = stackPhotoCount;

stackPhoto.forEach(photo => {
    photo.style.zIndex = `${zindex - 1}`;
    photo.style.right = `${zindex * 25}px`;
    photo.style.scale = `${Math.log(zindex) / 1.75}`;
    zindex -= 1;
});

document.addEventListener('DOMContentLoaded', () => {
    const stackContainer = document.getElementById('photo-stack-container');
    const leftButton = document.getElementById('stack-left-button');
    const rightButton = document.getElementById('stack-right-button');

    function shiftForward() {
        const photos = stackContainer.querySelectorAll('.stack-photo');

        if (photos.length > 0) {
            const firstPhoto = photos[0];
            stackContainer.appendChild(firstPhoto); // Move first to last
            firstPhoto.style.opacity = "1"; // Fade in effect
        }
    }

    function shiftBackward() {
        const photos = stackContainer.querySelectorAll('.stack-photo');

        if (photos.length > 0) {
            const lastPhoto = photos[photos.length - 1];
            stackContainer.insertBefore(lastPhoto, stackContainer.firstChild); // Move last to first
            lastPhoto.style.opacity = "1"; // Fade in effect

        }
    }

    rightButton.addEventListener('click', shiftForward);
    leftButton.addEventListener('click', shiftBackward);

    document.addEventListener('keydown', (event) => {
        if(event.key === 'ArrowRight'){
            shiftForward();
        }
        else if(event.key === 'ArrowLeft'){
            shiftBackward();
        }
    });
});




