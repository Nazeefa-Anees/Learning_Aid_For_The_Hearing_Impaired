from flask import Flask,redirect,url_for,render_template

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('index.html')

@app.route('/Question')
def quiz():
    title = 'Question'
    return render_template('question.html',title=title)




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

