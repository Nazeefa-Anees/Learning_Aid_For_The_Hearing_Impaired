async function loadModels() {
	const numbers_modelUrl = 'static/assets/models/model_Numbers/tfjs_model/model.json';
	const letters_modelUrl = 'static/assets/models/model_Letters/tfjs_model/model.json';
	const numbers_Model = await tf.loadGraphModel(numbers_modelUrl);
	const letters_Model = await tf.loadGraphModel(letters_modelUrl);
	console.log('Model loaded successfully!');
	return numbers_Model, letters_Model;
  }
  
  const load_Models = await loadModels();
  
  					// Start a timer for 5 seconds
            var totalSeconds = 5;
            var secondsRemaining = totalSeconds;
            var countDownInterval = setInterval(function() {
              document.getElementById("dataCollection").innerHTML = secondsRemaining;
              secondsRemaining--;
              if (secondsRemaining < 0) {
                clearInterval(countDownInterval);
  
              }
            }, 1000);