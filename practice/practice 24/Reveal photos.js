const revealPhotoWrapper = document.querySelector('#reveal-photo-wrapper');
const revealPhotoContainer = document.querySelector('#reveal-photo-container');
const revealPhotoDustbin = document.querySelector('#reveal-photo-dustbin');
const revealPhotoFrame = document.querySelectorAll('.reveal-photo-frame');
const bucket = document.querySelector('#bucket');
let totalPhotos = revealPhotoFrame.length;
const unseeButton = document.querySelector('#unsee-button');
let bucketRect = bucket.getBoundingClientRect(); // Recalculate when page fully loads

// to check overlapping
function isOverlapping(box1, box2) {
    return !(
        box1.right < box2.left ||  // box1 is completely to the left of box2
        box1.left > box2.right ||  // box1 is completely to the right of box2
        box1.bottom < box2.top ||  // box1 is completely above box2
        box1.top > box2.bottom     // box1 is completely below box2
    );
}

revealPhotoFrame.forEach((photo, index) => {

    bucketRect = bucket.getBoundingClientRect(); // Update bucket position before dragging
    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    // Mouse down event
    photo.addEventListener("pointerdown", (e) => {
        isDragging = true;
        offsetX = e.clientX - photo.offsetLeft;
        offsetY = e.clientY - photo.offsetTop;
        photo.style.cursor = "grabbing";
        photo.style.scale = '1.05';
    });

    // Mouse move event
    document.addEventListener("pointermove", (e) => {
        if (isDragging) {
            photo.style.left = `${e.clientX - offsetX}px`;
            photo.style.top = `${e.clientY - offsetY}px`;

            photo.style.transition = "top 0.05s ease, left 0.05s ease"

            let frameRect = photo.getBoundingClientRect();

            // Check if they overlap
            if (isOverlapping(bucketRect, frameRect)) {
                // console.log("The draggable box is inside or touching the dustbin area!");
                photo.style.scale = "0.75";
                photo.style.zIndex = "0";
            } else {
                // console.log("The draggable box is outside the dustbin.");
                photo.style.scale = "1.05";
                photo.style.zIndex = `${totalPhotos - index}`;
            }
        }
    });

    // Mouse up event
    document.addEventListener("pointerup", () => {
        isDragging = false;
        photo.style.cursor = "grab";
        photo.style.scale = '1.0';

        let frameRect = photo.getBoundingClientRect();

        // Check if they overlap
        if (isOverlapping(bucketRect, frameRect)) {
            // console.log("The draggable box is inside or touching the dustbin area!");
            photo.style.top = "100px";
            photo.style.left = "95px";
            photo.style.transition = "top 0.5s ease, left 0.5s ease";
            photo.style.scale = "0.6";
            photo.style.zIndex = "-1";
        } else {
            // console.log("The draggable box is outside the dustbin.");
            photo.style.top = "15%";
            photo.style.left = "140%";
            photo.style.transition = "top 0.5s ease, left 0.5s ease";
            photo.style.scale = "1.0";
            photo.style.zIndex = `${totalPhotos - index}`;
        }
    });
});


unseeButton.addEventListener('click', () => {
    let isAllPhotoInside = true;

    revealPhotoFrame.forEach((photo, index) => {
        if (getComputedStyle(photo).left != "95px") {
            isAllPhotoInside = false;
        }
    });

    revealPhotoFrame.forEach((photo, index) => {
        if (getComputedStyle(photo).left == "95px" && !isAllPhotoInside) {
            // prompt(`Photo number ${index + 1} are inside the container`);
            photo.style.top = "15%";
            photo.style.left = "140%";
            photo.style.transition = `scale 0.5s ease, top 0.5s ease, left 0.5s ease`;
            photo.style.scale = "1.0";
            photo.style.zIndex = `${totalPhotos - index}`;
            isAllPhotoInside = true;
        }
    });

    if (isAllPhotoInside) {
        revealPhotoFrame.forEach((photo, index) => {
            photo.style.top = "15%";
            photo.style.left = "140%";
            photo.style.transition = `scale 0.5s ease ${index / 10}s, top 0.5s ease ${index / 10}s, left 0.5s ease ${index / 10}s`;
            photo.style.scale = "1.0";
            photo.style.zIndex = `${totalPhotos - index}`;
        });
    }
    else {
        bucket.style.animation = "bucketShake 0.3s linear 3"; // Run 3 times

        // Stop the animation after it's done (0.9s since 0.3s * 3)
        setTimeout(() => {
            bucket.style.animation = "none"; // Reset animation
        }, 900);
    }
});