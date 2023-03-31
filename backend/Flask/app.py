from flask import Flask,redirect,url_for,render_template

app = Flask(__name__)

# @app.route('/')
# def letter1():
#     return render_template('Letter1.html')

@app.route('/')
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

@app.route('/success/<int:score>')
def success(score):
    return 'The marks are'+ str(score)

@app.route('/fail/<int:score>')
def fail(score):
    return 'The marks are'+ str(score)


#result checker
@app.route('/results/<int:marks>')
def results(marks):
    result = ""
    if marks<50:
        result = 'fail'
    else:
        result ='success'
    return redirect(url_for(result,score=marks))

if __name__ == '__main__':
    app.run(debug=True)

