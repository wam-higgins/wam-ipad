// Code from AI generators.
// The query was:
// Write a javascript that works correctly on WKWebView on iPad that will play a separate preview clip from one of four full videos on the page, rotating which video has a preview playing, and when the user clicks on any video, will open that video in fullscreen, automatically play it, and when the video is done, will exit fullscreen.  Make sure it works correctly on iPad with WKWebView.


// From https://zzzcode.ai/javascript/code-generator?id=9886521f-5ae3-4040-8bd6-d9b90f6b0265
// Result: FAIL
// Play Preview Clip: 
// Rotate Clips playing correctly:
// Fullscreen on click: 
// Auto Play: 
// Close fullscreen on exit: 
const videos = document.querySelectorAll('video');
/* 
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
*/

videos.forEach((video) => {
    video.addEventListener('click', () => {
        video.requestFullscreen();
        video.play();
        video.onended = () => {
            document.exitFullscreen();
        };
    });
});

// playPreview();
// End zzzcode




// From https://www.codeconvert.ai/javascript-code-generator
// Result: FAIL
// Fullscreen on click: Pass
// Auto Play: Pass
// Close fullscreen on exit: Fail



// from https://workik.com/javascript-code-generator
// Result: FAIL
// Fullscreen on click: Pass
// Auto Play: Pass
// Close fullscreen on exit: Fail
// Requires ElementID, but best written






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

