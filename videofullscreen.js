// From https://zzzcode.ai/javascript/code-generator?id=9886521f-5ae3-4040-8bd6-d9b90f6b0265

document.addEventListener('click', function(event) {
    const video = event.target.closest('video');
    if (video) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { // Safari
            video.webkitRequestFullscreen();
        }
        video.play();

        video.onended = function() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { // Safari
                document.webkitExitFullscreen();
            }
        };
    }
});

# Fullscreen Iframe on WKWebView for iPad
# from https://zzzcode.ai/javascript/code-generator?id=3f5b736d-f70d-419c-8796-8f9e422c3d2c

document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('click', function() {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen();
        }
    });
});



// Code from AI generators.
// The query was:
/*
Write html and javascript that work correctly on WKWebView on iPad that will: 
1. Display 4 embedded videos in a 2 by 2 grid.  
2. Play a separate preview clip from one of four full videos on the page
3. Rotate which video has a preview playing,
4. When the user clicks on any video, the full video will open in fullscreen and automatically play
5. When the fullscreen video is done, will exit fullscreen  
6. ALL of these MUST WORK correctly on iPad with WKWebView.
*/

/*
// From https://zzzcode.ai/javascript/code-generator?id=9886521f-5ae3-4040-8bd6-d9b90f6b0265
// Result: FAIL
// Play Preview Clip: F
// Rotate Clips playing correctly: F
// Fullscreen on click: F
// Auto Play: F
// Close fullscreen on exit: F
const videos = document.querySelectorAll('video');

let currentPreviewIndex = 0;

function playPreview() {
    videos[currentPreviewIndex].currentTime = 0;
    videos[currentPreviewIndex].play();
    currentPreviewIndex = (currentPreviewIndex + 1) % videos.length;
    setTimeout(() => {
        videos[currentPreviewIndex].pause();
        playPreview();
    }, 5000); // Change preview every 5 seconds
}


videos.forEach((video) => {
    video.addEventListener('click', () => {
        video.requestFullscreen();
        video.play();
        video.onended = () => {
            document.exitFullscreen();
        };
    });
});

playPreview();
// End zzzcode
*/


/*
// From https://www.codeconvert.ai/javascript-code-generator
// Result: FAIL
// Fullscreen on click: Pass
// Auto Play: Pass
// Close fullscreen on exit: Fail
// Note: Video elements need ID of "preview1" etc.
// Also, PREVIEW clips on main page. Full loaded in js

        const previews = [
            { preview: document.getElementById('preview1'), full: 'BTS1.mp4' },
            { preview: document.getElementById('preview2'), full: 'BTS2.mp4' },
            { preview: document.getElementById('preview3'), full: 'BTS3.mp4' },
            { preview: document.getElementById('preview4'), full: 'BTS4.mp4' }
        ];

        let currentIndex = 0;

        function playNextPreview() {
            previews[currentIndex].preview.play();
            previews[currentIndex].preview.onended = () => {
                currentIndex = (currentIndex + 1) % previews.length;
                playNextPreview();
            };
        }

        previews.forEach((video, index) => {
            video.preview.addEventListener('click', () => {
                const fullVideo = document.createElement('video');
                fullVideo.src = video.full;
                fullVideo.controls = true;
                fullVideo.autoplay = true;
                fullVideo.style.position = 'fixed';
                fullVideo.style.top = '0';
                fullVideo.style.left = '0';
                fullVideo.style.width = '100%';
                fullVideo.style.height = '100%';
                fullVideo.style.zIndex = '1000';
                document.body.appendChild(fullVideo);

                fullVideo.onended = () => {
                    document.body.removeChild(fullVideo);
                };
            });
        });

        playNextPreview();
//End CodeConvert
*/


/*
// from https://workik.com/javascript-code-generator
// Result: FAIL
// Fullscreen on click: Pass
// Auto Play: Pass
// Close fullscreen on exit: Fail
// Requires ElementID, but best written
// Note: Video elements need ID of "video1" etc.
// Also, PREVIEW clips on main page. Full loaded in js
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const videos = [
        { id: 'video1', fullVideo: 'video1-full.mp4' },
        { id: 'video2', fullVideo: 'video2-full.mp4' },
        { id: 'video3', fullVideo: 'video3-full.mp4' },
        { id: 'video4', fullVideo: 'video4-full.mp4' },
    ];

    let currentPreviewIndex = 0;

    // Play a preview video
    function playPreview(index) {
        videos.forEach((video, i) => {
            const videoElement = document.getElementById(video.id);
            if (i === index) {
                videoElement.play();
            } else {
                videoElement.pause();
                videoElement.currentTime = 0; // Reset other videos
            }
        });
    }

    // Function to toggle fullscreen
    function openFullscreen(elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }

    // Function to exit fullscreen
    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    // Play full video on click
    videos.forEach(video => {
        const videoElement = document.getElementById(video.id);
        videoElement.addEventListener('click', function() {
            const fullVideo = document.createElement('video');
            fullVideo.src = video.fullVideo;
            fullVideo.controls = true;
            fullVideo.style.position = 'fixed';
            fullVideo.style.top = 0;
            fullVideo.style.left = 0;
            fullVideo.style.width = '100%';
            fullVideo.style.height = '100%';
            fullVideo.autoplay = true;

            fullVideo.addEventListener('ended', function () {
                closeFullscreen();
                document.body.removeChild(fullVideo);
            });

            openFullscreen(fullVideo);
            document.body.appendChild(fullVideo);
        });
    });

    // Automatically switch preview every 5 seconds
    setInterval(() => {
        currentPreviewIndex = (currentPreviewIndex + 1) % videos.length;
        playPreview(currentPreviewIndex);
    }, 5000);

    // Start playing the first preview
    playPreview(currentPreviewIndex);
});
// End Workik
*/




// from https://www.mymap.ai/playground?mid=vHSswtlge5zqG
// Result: FAIL
// Fullscreen on click: Pass
// Auto Play: Pass
// Close fullscreen on exit: Fail
// UGLY code.

// From https://typli.ai/ai-javascript-code-generator
// Result: FAIL
// Fullscreen on click: Fail
// Auto Play: Fail
// Close fullscreen on exit: Fail

