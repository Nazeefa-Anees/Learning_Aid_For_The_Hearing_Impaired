from flask import Flask, jsonify, redirect, url_for, render_template, Response, request
import os
import cv2
import base64
import json
import numpy as np
import mediapipe as mp
import tensorflow as tf
from tqdm import tqdm
from tensorflow.keras.applications.vgg19 import VGG19
from tensorflow.keras.layers import Dense, Flatten
from tensorflow.keras.models import Model
from sklearn.preprocessing import LabelEncoder, OneHotEncoder


app = Flask(__name__)


@app.route('/save_screenshots', methods=['POST'])
def save_screenshots():
    screenshots = request.json['screenshots']
    directory = 'backend/Flask/screenshots'

    # get page
    page_name = request.referrer

    # Define input directories based on page
    if page_name == "http://127.0.0.1:5000/letter1":
        sub_dir = "1"
        
    elif page_name == "http://127.0.0.1:5000/letter2":
        sub_dir = "2"
        
    elif page_name == "http://127.0.0.1:5000/letter3":
        sub_dir = "3"
        
    elif page_name == "http://127.0.0.1:5000/letter4":
        sub_dir = "4"
        
    elif page_name == "http://127.0.0.1:5000/letter5":
        sub_dir = "5"
        
    elif page_name == "http://127.0.0.1:5000/letter6":
        sub_dir = "6"
        
    elif page_name == "http://127.0.0.1:5000/letter7":
        sub_dir = "7"
        
    elif page_name == "http://127.0.0.1:5000/letter8":
        sub_dir = "8"
        
    elif page_name == "http://127.0.0.1:5000/letter9":
        sub_dir = "9"
        
    elif page_name == "http://127.0.0.1:5000/letter10":
        sub_dir = "10"
        
    elif page_name == "http://127.0.0.1:5000/letter11":
        sub_dir = "11"
        
    elif page_name == "http://127.0.0.1:5000/letter12":
        sub_dir = "12"
        
    elif page_name == "http://127.0.0.1:5000/letter13":
        sub_dir = "13"
        
    elif page_name == "http://127.0.0.1:5000/letter14":
        sub_dir = "14"
        
    elif page_name == "http://127.0.0.1:5000/letter15":
        sub_dir = "15"
        
    elif page_name == "http://127.0.0.1:5000/letter16":
        sub_dir = "16"
        
    elif page_name == "http://127.0.0.1:5000/letter17":
        sub_dir = "17"
        
    elif page_name == "http://127.0.0.1:5000/letter18":
        sub_dir = "18"
        
    elif page_name == "http://127.0.0.1:5000/letter19":
        sub_dir = "19"
        
    elif page_name == "http://127.0.0.1:5000/letter20":
        sub_dir = "20"
        
    elif page_name == "http://127.0.0.1:5000/letter21":
        sub_dir = "21"
        
    elif page_name == "http://127.0.0.1:5000/letter22":
        sub_dir = "22"
        
    elif page_name == "http://127.0.0.1:5000/letter23":
        sub_dir = "23"
        
    elif page_name == "http://127.0.0.1:5000/letter24":
        sub_dir = "24"
        
    elif page_name == "http://127.0.0.1:5000/letter25":
        sub_dir = "25"
        
    elif page_name == "http://127.0.0.1:5000/letter26":
        sub_dir = "26"
        
    elif page_name == "http://127.0.0.1:5000/letter27":
        sub_dir = "27"
        
    elif page_name == "http://127.0.0.1:5000/number0":
        sub_dir = "num0"
        
    elif page_name == "http://127.0.0.1:5000/number1":
        sub_dir = "num1"
        
    elif page_name == "http://127.0.0.1:5000/number2":
        sub_dir = "num2"
        
    elif page_name == "http://127.0.0.1:5000/number3":
        sub_dir = "num3"
        
    elif page_name == "http://127.0.0.1:5000/number4":
        sub_dir = "num4"
        
    elif page_name == "http://127.0.0.1:5000/number5":
        sub_dir = "num5"
        
    elif page_name == "http://127.0.0.1:5000/number6":
        sub_dir = "num6"
        
    elif page_name == "http://127.0.0.1:5000/number7":
        sub_dir = "num7"
        
    elif page_name == "http://127.0.0.1:5000/number8":
        sub_dir = "num8"
        
    elif page_name == "http://127.0.0.1:5000/number9":
        sub_dir = "num9"
        
    else:
        print(f"Invalid page: {page_name}")
        exit()

    # subdirectories path
    subdir_path = os.path.join(directory, sub_dir)

    if not os.path.exists(subdir_path):
        os.makedirs(subdir_path)
    for i, screenshot in enumerate(screenshots):
        with open(f'{subdir_path}/screenshot_{i}.png', 'wb') as f:
            f.write(base64.b64decode(screenshot.split(',')[1]))
    return jsonify({"message": "Screenshots saved successfully."})


@app.route("/extract_hand_landmarks")
def extract_hand_landmarks():
    # Initialize MediaPipe Hands
    mp_hands = mp.solutions.hands
    hands = mp_hands.Hands(
        static_image_mode=True,
        max_num_hands=1,
        min_detection_confidence=0.8,
    )

    # Set input and output directories
    input_dir = "backend/Flask/screenshots"
    output_dir = "backend/Flask/screenshotsProcessed"

    # Initialize empty list to store landmarks
    landmarks = []

    # Loop through images in input directory
    for image_file in os.listdir(input_dir):
        if not image_file.endswith(".png"):
            continue
        
        # Load input image and resize
        image_path = os.path.join(input_dir, image_file)
        image = cv2.imread(image_path)
        image = cv2.resize(image, (672, 672))  # Replace with your desired size

        # Convert image to RGB format and run hand detection
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = hands.process(image)

        # Check if hand(s) were detected
        if results.multi_hand_landmarks:
            # Extract landmarks for detected hand
            for hand_landmarks in results.multi_hand_landmarks:
                # Normalize landmarks with respect to image size
                image_height, image_width, _ = image.shape
                landmarks_norm = np.array([[lmk.x * image_width, lmk.y * image_height, lmk.z] for lmk in hand_landmarks.landmark])
                
                # Add landmarks to list
                landmarks.append(landmarks_norm.flatten())
                
                # Save output image with landmarks
                image_draw = image.copy()
                mp_drawing = mp.solutions.drawing_utils
                mp_drawing.draw_landmarks(
                    image_draw, hand_landmarks, mp_hands.HAND_CONNECTIONS,
                    mp_drawing.DrawingSpec(color=(255, 0, 0), thickness=2, circle_radius=2),
                    mp_drawing.DrawingSpec(color=(0, 255, 0), thickness=2)
                )
                output_path = os.path.join(output_dir, image_file)
                cv2.imwrite(output_path, image_draw)

    # Clean up
    hands.close()

    # Convert landmarks to NumPy array
    landmarks = np.array(landmarks)

    # Save landmarks file
    np.save("hand_landmarks.npy", landmarks)
    return jsonify({"message": "Store the extracted hand_landmarks.npy Done."})


@app.route('/process_screenshots')
def process_screenshots():
    # Initialize MediaPipe Hands
    mp_hands = mp.solutions.hands
    hands = mp_hands.Hands(
        static_image_mode=True,
        max_num_hands=1,
        min_detection_confidence=0.8,
    )

    # Set input and output directories
    input_dir = "backend/Flask/screenshots"
    output_dir = "backend/Flask/screenshotsProcessed"

    # Initialize empty lists to store landmarks and labels
    landmarks = []

    # get page
    page_name = request.referrer

    # Define input directories based on page
    if page_name == "http://127.0.0.1:5000/letter1":
        sub_dir = "1"
        
    elif page_name == "http://127.0.0.1:5000/letter2":
        sub_dir = "2"
        
    elif page_name == "http://127.0.0.1:5000/letter3":
        sub_dir = "3"
        
    elif page_name == "http://127.0.0.1:5000/letter4":
        sub_dir = "4"
        
    elif page_name == "http://127.0.0.1:5000/letter5":
        sub_dir = "5"
        
    elif page_name == "http://127.0.0.1:5000/letter6":
        sub_dir = "6"
        
    elif page_name == "http://127.0.0.1:5000/letter7":
        sub_dir = "7"
        
    elif page_name == "http://127.0.0.1:5000/letter8":
        sub_dir = "8"
        
    elif page_name == "http://127.0.0.1:5000/letter9":
        sub_dir = "9"
        
    elif page_name == "http://127.0.0.1:5000/letter10":
        sub_dir = "10"
        
    elif page_name == "http://127.0.0.1:5000/letter11":
        sub_dir = "11"
        
    elif page_name == "http://127.0.0.1:5000/letter12":
        sub_dir = "12"
        
    elif page_name == "http://127.0.0.1:5000/letter13":
        sub_dir = "13"
        
    elif page_name == "http://127.0.0.1:5000/letter14":
        sub_dir = "14"
        
    elif page_name == "http://127.0.0.1:5000/letter15":
        sub_dir = "15"
        
    elif page_name == "http://127.0.0.1:5000/letter16":
        sub_dir = "16"
        
    elif page_name == "http://127.0.0.1:5000/letter17":
        sub_dir = "17"
        
    elif page_name == "http://127.0.0.1:5000/letter18":
        sub_dir = "18"
        
    elif page_name == "http://127.0.0.1:5000/letter19":
        sub_dir = "19"
        
    elif page_name == "http://127.0.0.1:5000/letter20":
        sub_dir = "20"
        
    elif page_name == "http://127.0.0.1:5000/letter21":
        sub_dir = "21"
        
    elif page_name == "http://127.0.0.1:5000/letter22":
        sub_dir = "22"
        
    elif page_name == "http://127.0.0.1:5000/letter23":
        sub_dir = "23"
        
    elif page_name == "http://127.0.0.1:5000/letter24":
        sub_dir = "24"
        
    elif page_name == "http://127.0.0.1:5000/letter25":
        sub_dir = "25"
        
    elif page_name == "http://127.0.0.1:5000/letter26":
        sub_dir = "26"
        
    elif page_name == "http://127.0.0.1:5000/letter27":
        sub_dir = "27"
        
    elif page_name == "http://127.0.0.1:5000/number0":
        sub_dir = "num0"
        
    elif page_name == "http://127.0.0.1:5000/number1":
        sub_dir = "num1"
        
    elif page_name == "http://127.0.0.1:5000/number2":
        sub_dir = "num2"
        
    elif page_name == "http://127.0.0.1:5000/number3":
        sub_dir = "num3"
        
    elif page_name == "http://127.0.0.1:5000/number4":
        sub_dir = "num4"
        
    elif page_name == "http://127.0.0.1:5000/number5":
        sub_dir = "num5"
        
    elif page_name == "http://127.0.0.1:5000/number6":
        sub_dir = "num6"
        
    elif page_name == "http://127.0.0.1:5000/number7":
        sub_dir = "num7"
        
    elif page_name == "http://127.0.0.1:5000/number8":
        sub_dir = "num8"
        
    elif page_name == "http://127.0.0.1:5000/number9":
        sub_dir = "num9"
        
    else:
        print(f"Invalid page: {page_name}")
        exit()
    
    # subdirectories path
    subdir_path = os.path.join(input_dir, sub_dir)

    # Check if subdirectory is valid and has images
    if os.path.isdir(subdir_path):
        image_files = [os.path.join(subdir_path, f) for f in os.listdir(subdir_path) if os.path.isfile(os.path.join(subdir_path, f))]
        if not image_files:
            print("no image_files")

        # Loop through images in subdirectory
        for image_path in tqdm(image_files, desc=f"Processing {sub_dir}", unit="image"):
            # Load input image and resize
            image = cv2.imread(image_path)
            image = cv2.resize(image, (672, 672))  # Replace with your desired size

            # Convert image to RGB format and run hand detection
            image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            results = hands.process(image)

            # Check if hand(s) were detected
            if results.multi_hand_landmarks:
                # Extract landmarks for detected hand
                for hand_landmarks in results.multi_hand_landmarks:
                    # Normalize landmarks with respect to image size
                    image_height, image_width, _ = image.shape
                    landmarks_norm = np.array([[lmk.x * image_width, lmk.y * image_height, lmk.z] for lmk in hand_landmarks.landmark])

                    # Draw landmarks on image
                    mp_drawing = mp.solutions.drawing_utils
                    image_draw = image.copy()
                    mp_drawing.draw_landmarks(
                        image_draw, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                    # Draw connections between landmarks with red lines
                    mp_drawing.draw_landmarks(
                        image_draw, hand_landmarks, mp_hands.HAND_CONNECTIONS,
                        mp_drawing.DrawingSpec(color=(255, 0, 0), thickness=2, circle_radius=2),
                        mp_drawing.DrawingSpec(color=(0, 255, 0), thickness=2)
                    )

                    # Add landmarks to lists
                    landmarks.append(landmarks_norm.flatten())

                    # Save output image
                    output_path = os.path.join(output_dir, sub_dir, os.path.basename(image_path))
                    os.makedirs(os.path.dirname(output_path), exist_ok=True)
                    cv2.imwrite(output_path, image_draw)

    # Clean up
    hands.close()

    # Convert landmarks to NumPy array
    landmarks = np.array(landmarks)

    np.save("backend/Flask/live_hand_landmarks.npy", landmarks)
    #print("Store the extracted live_hand_landmarks.npy Done")

    return jsonify({"message": "Screenshots processed successfully."})


# @app.route('/')
# def splash():
#     return render_template('splash.html')


# @app.route('/prediction')
# def prediction():
#     return render_template('prediction.html')


# @app.route('/predresult')
# def predresult():
#     return render_template('predresult.html')


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


@app.route('/letter2')
def letter2():
     return render_template('Letter2.html')

@app.route('/letter3')
def letter3():
     return render_template('Letter3.html')

@app.route('/letter4')
def letter4():
     return render_template('Letter4.html')

@app.route('/letter5')
def letter5():
     return render_template('Letter5.html')

@app.route('/letter6')
def letter6():
     return render_template('Letter6.html')

@app.route('/letter7')
def letter7():
     return render_template('Letter7.html')

@app.route('/letter8')
def letter8():
     return render_template('Letter8.html')

@app.route('/letter9')
def letter9():
     return render_template('Letter9.html')

@app.route('/letter10')
def letter10():
     return render_template('Letter10.html')

@app.route('/letter11')
def letter11():
     return render_template('Letter11.html')

@app.route('/letter12')
def letter12():
     return render_template('Letter12.html')

@app.route('/letter13')
def letter13():
     return render_template('Letter13.html')

@app.route('/letter14')
def letter14():
     return render_template('Letter14.html')

@app.route('/letter15')
def letter15():
     return render_template('Letter15.html')

@app.route('/letter16')
def letter16():
     return render_template('Letter16.html')

@app.route('/letter17')
def letter17():
     return render_template('Letter17.html')

@app.route('/letter18')
def letter18():
     return render_template('Letter18.html')

@app.route('/letter19')
def letter19():
     return render_template('Letter19.html')

@app.route('/letter20')
def letter20():
     return render_template('Letter20.html')

@app.route('/letter21')
def letter21():
     return render_template('Letter21.html')

@app.route('/letter22')
def letter22():
     return render_template('Letter22.html')

@app.route('/letter23')
def letter23():
     return render_template('Letter23.html')

@app.route('/letter24')
def letter24():
     return render_template('Letter24.html')

@app.route('/letter25')
def letter25():
     return render_template('Letter25.html')

@app.route('/letter26')
def letter26():
     return render_template('Letter26.html')

@app.route('/letter27')
def letter27():
     return render_template('Letter27.html')

@app.route('/number0')
def number0():
    return render_template('number0.html')

# @app.route('/number1')
# def number1():
#     return render_template('number1.html')


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


@app.route('/feedback')
def feedback():
    return render_template('feedback.html')


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
