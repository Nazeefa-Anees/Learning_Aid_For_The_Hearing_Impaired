from flask import Flask, request, jsonify
import base64
import numpy as np
import cv2
import tensorflow as tf


app = Flask(__name__)


# Load the saved model from JSON file


model = tf.keras.models.load_model('./hand_sign_model2.h5')


# Define a function to preprocess the image
def preprocess_image(image_b64):
    # Convert the base64-encoded image to a NumPy array
    image_bytes = base64.b64decode(image_b64)
    image_np = np.frombuffer(image_bytes, dtype=np.uint8)
    image = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
    # Resize the image to match the input shape of the model
    image = cv2.resize(image, (224, 224))
    # Convert the image to a floating-point tensor and normalize its values
    image = tf.keras.preprocessing.image.img_to_array(image)
    image /= 255.0
    # Expand the dimensions of the image tensor to match the input shape of the model
    image = np.expand_dims(image, axis=0)
    return image

@app.route('/api/predict', methods=['POST'])
def predict():
    # Get the image data from the request
    image_b64 = request.json['image']
    # Preprocess the image
    image = preprocess_image(image_b64)
    # Make a prediction using the saved model
    prediction = model.predict(image)
    # Convert the prediction to a string and return it as a JSON response
    prediction_str = str(prediction[0][0])
    return jsonify({'prediction': prediction_str})

if __name__ == '__main__':
    app.run(debug=True)

