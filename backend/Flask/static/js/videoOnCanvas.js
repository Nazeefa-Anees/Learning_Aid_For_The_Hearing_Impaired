var liveVideo = document.getElementById('liveVideo');
var screenshotCanvas = document.getElementById('screenshotCanvas');
var context = screenshotCanvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
.then(function(stream) {
    liveVideo.srcObject = stream;
    liveVideo.play();
})
.catch(function(error) {
    console.error('Could not get user media:', error);
});

function draw() {
    // Set canvas size to match video size
    screenshotCanvas.width = liveVideo.videoWidth;
    screenshotCanvas.height = liveVideo.videoHeight;

    // Flip the context horizontally
    context.scale(-1, 1);
    context.translate(-screenshotCanvas.width, 0);

    // Draw the current video frame onto the canvas
    context.drawImage(liveVideo, 0, 0, screenshotCanvas.width, screenshotCanvas.height);

    // Call this function again on the next animation frame
    requestAnimationFrame(draw);
}

// Start rendering the video frames on the canvas
requestAnimationFrame(draw);