from flask import Flask,redirect,url_for,render_template
import cv2
import mediapipe as mp
import numpy as np
from flask import Flask, Response

app = Flask(__name__)

# model1 = tf.keras.models.load_model("backend\models\model_Letters")
# model2 = tf.keras.models.load_model("backend\models\model_Numbers")

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=1, min_detection_confidence=0.8)

# Define the route for the camera stream
@app.route('/camera_stream')
def camera_stream():
    return Response(process_camera_stream(), mimetype='multipart/x-mixed-replace; boundary=frame')

# Function to process the camera stream
def process_camera_stream():
    # Set up the camera
    cap = cv2.VideoCapture(0)
    cap.set(cv2.CAP_PROP_FPS, 5)

    # Initialize the list to store hand landmarks
    hand_landmarks_list = []

    # Set a timer for 10 seconds
    end_time = cv2.getTickCount() + 10 * cv2.getTickFrequency()

    while cv2.getTickCount() < end_time:
        # Read a frame from the camera
        ret, frame = cap.read()

        if not ret:
            break

        # Convert the frame to RGB and run it through MediaPipe Hands to get hand landmarks
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(frame)
        if results.multi_hand_landmarks:
            hand_landmarks = results.multi_hand_landmarks[0]
            hand_landmarks_array = np.zeros((21, 3))
            for i, landmark in enumerate(hand_landmarks.landmark):
                hand_landmarks_array[i] = [landmark.x, landmark.y, landmark.z]
            hand_landmarks_list.append(hand_landmarks_array)

        # Convert the frame back to BGR for display
        frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)

        # Convert the frame to a JPEG image for streaming
        ret, jpeg = cv2.imencode('.jpg', frame)
        frame_bytes = jpeg.tobytes()

        # Yield the frame as a multipart response
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

    # Release the camera and MediaPipe Hands resources
    cap.release()
    hands.close()

    # Convert the hand landmarks list to a NumPy array and return it
    hand_landmarks_array = np.array(hand_landmarks_list)
    return hand_landmarks_array

print(process_camera_stream())



# @app.route('/')
# def learning():
#     return render_template('learning.html')

@app.route('/learningselection1')
def learningselection1():
    return render_template('learningselection1.html')

@app.route('/learningselection2')
def learningselection2():
    return render_template('learningselection2.html')


@app.route('/Letter1')
def letter1():
     return render_template('Letter1.html')

# @app.route('/number1')
# def number1():
#     return render_template('number1.html')

# @app.route('/')
# def quiz():
#     return render_template('quiz.html')


@app.route('/question1')
def question1():
    return render_template('question1.html')

@app.route('/question2')
def question2():
    return render_template('question2.html')

@app.route('/question3')
def question3():
    return render_template('question3.html')

@app.route('/question4')
def question4():
    return render_template('question4.html')

@app.route('/question5')
def question5():
    return render_template('question5.html')




# # Define a route to handle the quiz
# @app.route("/quiz", methods=["POST"])
# def quiz():
#     score = 0

#     # Ask the user 5 questions
#     for i in range(5):
#         # Show the user the question and ask them to show the sign to the camera
#         # Capture the video stream and process it using the machine learning model
#         video = request.files["video"]
#         image = cv2.imdecode(np.fromstring(video.read(), np.uint8), cv2.IMREAD_UNCHANGED)
#         result = model.predict(image)
#         accuracy = float(result[0][0])
        
#         # Calculate the accuracy of the sign and add it to the user's score
#         if accuracy > 0.8:
#             score += 1

#     # Determine the feedback based on the user's score
#     if score == 5:
#         feedback = "Congratulations! You got all the questions correct!"
#     elif score == 4:
#         feedback = "Great job! You got 4 out of 5 questions correct."
#     elif score <= 3:
#         feedback = "You need to work harder. Try again!"

#     # Return the user's score and feedback
#     return jsonify({"score": score, "feedback": feedback})



# @app.route('/success/<int:score>')
# def success(score):
#     return 'The marks are'+ str(score)

# @app.route('/fail/<int:score>')
# def fail(score):
#     return 'The marks are'+ str(score)


# #result checker
# @app.route('/results/<int:marks>')
# def results(marks):
#     result = ""
#     if marks<50:
#         result = 'fail'
#     else:
#         result ='success'
#     return redirect(url_for(result,score=marks))

if __name__ == '__main__':
    app.run(debug=True)

