from flask import Flask, jsonify, request
import mediapipe as mp
import tensorflow as tf
import numpy as np

app = Flask(__name__)

# Load the saved TensorFlow model
Letter_model = tf.keras.models.load_model("Letters/hand_sign_model.h5")

# Initialize the MediaPipe pose detection pipeline
mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode=True)

# Define the Flask routes for the quiz and feedback system
@app.route('/quiz', methods=['POST'])
def quiz():
    # Parse the request data from the frontend
    image_data = request.json['imageData']

    # Convert the image data to a NumPy array
    image = np.array(image_data)

    # Detect the pose landmarks in the image using MediaPipe
    results = pose.process(image)

    # Extract the pose landmarks as input to the TensorFlow model
    pose_landmarks = results.pose_landmarks.landmark
    input_data = np.array([[lmk.x, lmk.y, lmk.z, lmk.visibility] for lmk in pose_landmarks])

    # Make a prediction using the TensorFlow model
    prediction = model.predict(np.expand_dims(input_data, axis=0))[0]

    # Return the quiz results to the frontend
    return jsonify({
        'results': {
            'score': float(prediction[0]),
            'answer': int(prediction[1])
        }
    })



if __name__ == '__main__':
    app.run()
