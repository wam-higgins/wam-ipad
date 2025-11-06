
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
            // Exit fullscreen on the video element itself (required for WKWebView/Kiosk Pro)
            if (video.webkitExitFullscreen) {
                video.webkitExitFullscreen();
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            // Reset video to beginning to show opening frame
            video.currentTime = 0;
        };
    }
});

// Fullscreen Iframe on WKWebView for iPad
// from https://zzzcode.ai/javascript/code-generator?id=3f5b736d-f70d-419c-8796-8f9e422c3d2c

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

