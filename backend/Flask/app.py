from flask import Flask,redirect,url_for,render_template

app = Flask(__name__)

# model1 = tf.keras.models.load_model("backend\models\model_Letters")
# model2 = tf.keras.models.load_model("backend\models\model_Numbers")



@app.route('/')
def letter1():
    return render_template('Letter1.html')

# @app.route('/')
# def learning():
#     return render_template('learning.html')


# @app.route('/')
# def question1():
#     return render_template('question1.html')

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




# Define a route to handle the quiz
@app.route("/quiz", methods=["POST"])
def quiz():
    score = 0

    # Ask the user 5 questions
    for i in range(5):
        # Show the user the question and ask them to show the sign to the camera
        # Capture the video stream and process it using the machine learning model
        video = request.files["video"]
        image = cv2.imdecode(np.fromstring(video.read(), np.uint8), cv2.IMREAD_UNCHANGED)
        result = model.predict(image)
        accuracy = float(result[0][0])
        
        # Calculate the accuracy of the sign and add it to the user's score
        if accuracy > 0.8:
            score += 1

    # Determine the feedback based on the user's score
    if score == 5:
        feedback = "Congratulations! You got all the questions correct!"
    elif score == 4:
        feedback = "Great job! You got 4 out of 5 questions correct."
    elif score <= 3:
        feedback = "You need to work harder. Try again!"

    # Return the user's score and feedback
    return jsonify({"score": score, "feedback": feedback})



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

