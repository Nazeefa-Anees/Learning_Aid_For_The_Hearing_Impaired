const questions = [
    {
     
      question:'fus wlqr fudllao',
      image: '../static/assets/dataset_icons/letters/1.JPG',
      options: [
        { text: "  j",correct:false },
        { text: '  w', correct:true},
        { text: '  n', correct:false },
        { text: '  okafka keye', correct:false },
      ]
    },
    {
        
        question: 'fus wlqr fudllao',
        image: '../static/assets/dataset_icons/letters/5.JPG',
        options: [
          {text: '  W', correct:true },
          {text: '  w',correct:false },
          {text: '  p',correct:false },
          {text: '  okafka keye',correct:false },
        ]
      },
      {
       
        question: 'fus wlqr fudllao',
        image: '../static/assets/dataset_icons/letters/9.JPG',
        options: [
          { text: '  t',correct:false },
          { text: '  g',correct:false },
          { text: '  o',correct:true },
          { text: '  okafka keye',correct:false },
        ]
      },
      {
        
        question: 'fus wlqr fudllao',
        image:'../static/assets/dataset_icons/letters/12.JPG' ,
        options: [
          {text: '  ;',correct:true },
          {text: '  w', correct:false },
          {text: '  b', correct:false },
          {text: '  okafka keye', correct:false },
        ]
      },
      {
       
        question: 'fus wlqr fudllao',
        image: '../static/assets/dataset_icons/letters/20.JPG',
        options: [
          {text: '  k', correct:false },
          {text: '  r', correct:true },
          {text: '  t', correct:false  },
          {text: '  okafka keye', correct:false  },
        ]
      },
      {
        
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/2.JPG',
        options: [
          { text: '  1', correct:false  },
          { text: '  3' , correct:false },
          { text: '  2' , correct:true },
          { text: '  okafka keye', correct:false  },
        ]
      },
      {
        
        question: 'fus b,lalu fudllao',
        image:'../static/assets/dataset_icons/numbers/5.JPG',
        options: [
          {text: '  4', correct:false  },
          {text: '  3' , correct:false },
          {text: '  5' , correct:true },
          {text: '  okafka keye', correct:false  },
        ]
      },
      {
    
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/7.JPG',
        options: [
          {  text: '  1', correct:false  },
          { text: '  7', correct:true  },
          {  text: '  2' , correct:false },
          {  text: '  okafka keye', correct:false  },
        ]
      },
      {
        
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/1.JPG',
        options: [
          {text: '  7' , correct:false },
          {text: '  1' , correct:true },
          {text: '  4', correct:false  },
          {text: '  okafka keye' , correct:false },
        ]
      },
      {
       
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/4.JPG',
        options: [
          { text: '  1', correct:false  },
          {text: '  4' , correct:true },
          { text: '  9' , correct:false },
          { text: '  okafka keye' , correct:false },
        ]
      }
    ];

    const questionElement = document.getElementById("question");
    const imageElement = document.getElementById("image");
    const answerbuttons = document.getElementById("answer-button");
    const nextbutton = document.getElementById("next-btn");
    const learningbutton = document.getElementById("learning-btn");
    const quizbutton = document.getElementById("quiz-btn");
    const scoreElement = document.getElementById("score");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        nextbutton.innerHTML="yrs";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ' ' + currentQuestion.question;
        image.src = currentQuestion.image;

        currentQuestion.options.forEach(answer =>{
            const button= document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerbuttons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer);
         });
    }

    function resetState(){
        nextbutton.style.display = 'none';
        while(answerbuttons.firstChild) {
            answerbuttons.removeChild(answerbuttons.firstChild);
        }
    }


    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerbuttons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextbutton.style.display="block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML = `Thdf.a ,lqKQ`;
        scoreElement.style.display="block";
        scoreElement.innerHTML = `${score}/${questions.length}`;
        imageElement.style.display="none";
        
        nextbutton.style.display="none";
        if(score >= 7){
            quizbutton.style.display="block";
        }else{
            learningbutton.style.display="block";
        }
        
        
    }


    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }

    nextbutton.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })

    startQuiz(); 
