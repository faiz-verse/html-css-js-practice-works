const scrollLeft = document.querySelector('#scroll-left');
const scrollRight = document.querySelector('#scroll-right');
const photoContainer = document.getElementById('old-photo-container');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        photoContainer.scrollBy({ top: 300, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
        photoContainer.scrollBy({ top: -300, behavior: 'smooth' });
    }
});

scrollLeft.addEventListener('click', ()=> {
    photoContainer.scrollBy({ top: -300, behavior: 'smooth' });
});

scrollRight.addEventListener('click', ()=> {
    photoContainer.scrollBy({ top: 300, behavior: 'smooth' });
});
