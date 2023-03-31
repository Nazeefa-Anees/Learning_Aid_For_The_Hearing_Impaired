function startCamera() {
    // Hide the button
    document.getElementById("start-camera").style.display = "none";
    
    // Display the countdown
    var countdown = 3;
    var countdownInterval = setInterval(function() {
        document.getElementById("countdown").innerHTML = countdown;
        countdown--;
        if (countdown < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("video").style.display = "block";
        }
    }, 1000);
    
    // Start the camera
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
        var video = document.getElementById("video");
        video.srcObject = stream;
        video.play();
        })
        .catch(function(error) {
        console.log(error);
        });
    }
    
export default startCamera;
  