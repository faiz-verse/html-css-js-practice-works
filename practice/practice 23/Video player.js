const videoPlayerWrapper = document.getElementById('video-player-wrapper');
const videoPlayerContainer = document.getElementById('video-player-container');
const videoPlayerIcon = document.getElementById('video-player-icon');

const video = document.getElementById('video');
video.pause();

isVideoDisplayed = false;

videoPlayerContainer.addEventListener('click', () => {

    if (isVideoDisplayed == false) {

        // transforming the icon
        videoPlayerIcon.style.transform = `translateY(10px)`;
        setTimeout(() => {
            videoPlayerIcon.style.transform = `translateY(-200%)`;
            videoPlayerIcon.style.opacity = "0";
        }, 300);

        videoPlayerContainer.style.borderRadius = "20px";
        document.documentElement.style.setProperty('--before-animation-duration', '5s');
        document.documentElement.style.setProperty('--after-animation-duration', '2s');
        document.documentElement.style.setProperty('--after-before-opacity', '0');

        setTimeout(() => {
            document.documentElement.style.setProperty('--video-container-height', '300px');
            document.documentElement.style.setProperty('--video-container-width', '600px');
            videoPlayerContainer.style.opacity = "0"; // Hide button
            document.documentElement.style.setProperty('--after-before-height-width', '150px');
        }, 300);

        video.style.opacity= '1';

        setTimeout(() => {
            document.documentElement.style.setProperty('--animation-play-state', 'paused'); // Pause the animations
            video.play();
        }, 700);

        isVideoDisplayed = true;
    }
    else {
        videoPlayerIcon.style.transform = `translateX(3.5px) translateY(3px)`;
        videoPlayerIcon.style.opacity = "1";
        setTimeout(() => {
            videoPlayerIcon.style.transform = `translateX(3.5px) translateY(0px)`;
        }, 550);

        document.documentElement.style.setProperty('--before-animation-duration', '7s');
        document.documentElement.style.setProperty('--after-animation-duration', '4s');
        document.documentElement.style.setProperty('--after-before-opacity', '1');
        video.style.opacity= '0.3';
        document.documentElement.style.setProperty('--video-container-height', '75px');
        document.documentElement.style.setProperty('--video-container-width', '75px');
        document.documentElement.style.setProperty('--after-before-height-width', '75px');

        setTimeout(() => {
            videoPlayerContainer.style.borderRadius = "50%";
            videoPlayerContainer.style.opacity = "1"; // Show button
        }, 300);

        setTimeout(() => {
            document.documentElement.style.setProperty('--animation-play-state', 'running'); // Pause the animations
            video.pause();
        }, 700);

        isVideoDisplayed = false;
    }
});

// for video line
const videoProgress = document.getElementById('video-progress');

// Update the progress bar and the background fill as the video plays
video.addEventListener('timeupdate', () => {
    let progress = (video.currentTime / video.duration) * 100;
    videoProgress.value = progress;
    // Change the background of the progress bar to highlight the completed part
    videoProgress.style.background = `linear-gradient(to right, red ${progress}%, #ddd ${progress}%)`;
});

// Seek video while dragging the progress bar
videoProgress.addEventListener('input', () => {
    let seekTime = (videoProgress.value / 100) * video.duration;
    video.currentTime = seekTime;
    let progress = videoProgress.value;
    // Change the background of the progress bar to highlight the completed part
    videoProgress.style.background = `linear-gradient(to right, red ${progress}%, #ddd ${progress}%)`;
});