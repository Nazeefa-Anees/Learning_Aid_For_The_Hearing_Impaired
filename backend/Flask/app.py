from flask import Flask,redirect,url_for,render_template
import cv2
import os
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
@app.route('/camera_stream', methods=['POST'])
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
    # Define the file path and name for the text file
    file_path = os.path.join(app.static_folder, 'hand_landmarks.txt')
    
    # Write the hand landmarks array to the text file
    with open(file_path, 'w') as f:
        for row in hand_landmarks_array:
            f.write(' '.join(str(x) for x in row) + '\n')
    
    # Return a message to indicate that the file has been saved
    return 'Hand landmarks saved to ' + file_path , hand_landmarks_array



@app.route('/')
def home():
    return render_template('home.html')

@app.route('/learning')
def learning():
    return render_template('learning.html')

@app.route('/learningselection1')
def learningselection1():
    return render_template('learningselection1.html')

@app.route('/learningselection2')
def learningselection2():
    return render_template('learningselection2.html')


@app.route('/letter1')
def letter1():
     return render_template('Letter1.html')

# @app.route('/letter2')
# def letter2():
#      return render_template('Letter2.html')

# @app.route('/letter3')
# def letter3():
#      return render_template('Letter3.html')

# @app.route('/letter4')
# def letter4():
#      return render_template('Letter4.html')

# @app.route('/letter5')
# def letter5():
#      return render_template('Letter5.html')

# @app.route('/letter6')
# def letter6():
#      return render_template('Letter6.html')

# @app.route('/letter7')
# def letter7():
#      return render_template('Letter7.html')

# @app.route('/letter8')
# def letter8():
#      return render_template('Letter8.html')

# @app.route('/letter9')
# def letter9():
#      return render_template('Letter9.html')

# @app.route('/letter10')
# def letter10():
#      return render_template('Letter10.html')

# @app.route('/letter11')
# def letter11():
#      return render_template('Letter11.html')

# @app.route('/letter12')
# def letter12():
#      return render_template('Letter12.html')

# @app.route('/letter13')
# def letter13():
#      return render_template('Letter13.html')

# @app.route('/letter14')
# def letter14():
#      return render_template('Letter14.html')

# @app.route('/letter15')
# def letter15():
#      return render_template('Letter15.html')

# @app.route('/letter16')
# def letter16():
#      return render_template('Letter16.html')

# @app.route('/letter17')
# def letter17():
#      return render_template('Letter17.html')

# @app.route('/letter18')
# def letter18():
#      return render_template('Letter18.html')

# @app.route('/letter19')
# def letter19():
#      return render_template('Letter19.html')

# @app.route('/letter20')
# def letter20():
#      return render_template('Letter20.html')

# @app.route('/letter21')
# def letter21():
#      return render_template('Letter21.html')

# @app.route('/letter22')
# def letter22():
#      return render_template('Letter22.html')

# @app.route('/letter23')
# def letter23():
#      return render_template('Letter23.html')

# @app.route('/letter24')
# def letter24():
#      return render_template('Letter24.html')

# @app.route('/letter25')
# def letter25():
#      return render_template('Letter25.html')

# @app.route('/letter26')
# def letter26():
#      return render_template('Letter26.html')

# @app.route('/letter27')
# def letter27():
#      return render_template('Letter27.html')

# @app.route('/number0')
# def number0():
#     return render_template('number0.html')

@app.route('/number1')
def number1():
    return render_template('number1.html')

# @app.route('/number2')
# def number2():
#     return render_template('number2.html')

# @app.route('/number3')
# def number3():
#     return render_template('number3.html')

# @app.route('/number4')
# def number4():
#     return render_template('number4.html')

# @app.route('/number5')
# def number5():
#     return render_template('number5.html')

# @app.route('/number6')
# def number6():
#     return render_template('number6.html')

# @app.route('/number7')
# def number7():
#     return render_template('number7.html')

# @app.route('/number8')
# def number8():
#     return render_template('number8.html')

# @app.route('/number9')
# def number9():
#     return render_template('number9.html')


@app.route('/quiz')
def quiz():
    return render_template('quiz.html')


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

@app.route('/question6')
def question6():
    return render_template('question6.html')

@app.route('/question7')
def question7():
    return render_template('question7.html')

@app.route('/question8')
def question8():
    return render_template('question8.html')

@app.route('/question9')
def question9():
    return render_template('question9.html')

@app.route('/question10')
def question10():
    return render_template('question10.html')




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

