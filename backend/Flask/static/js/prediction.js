const questions = [
    {
      id: 1,
      question:'fus wlqr fudllao',
      image: '../static/assets/dataset_icons/letters/1.JPG',
      options: [
        { id: 1, text: "  j" },
        { id: 2, text: '  w' },
        { id: 3, text: '  n' },
        { id: 4, text: '  okafka keye' },
      ],
      answer: 2, // index of correct answer in options array
    },
    {
        id: 2,
        question: 'fus wlqr fudllao',
        image: '../static/assets/dataset_icons/letters/5.JPG',
        options: [
          { id: 1, text: '  W' },
          { id: 2, text: '  w' },
          { id: 3, text: '  p' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 1, // index of correct answer in options array
      },
      {
        id: 3,
        question: 'fus wlqr fudllao',
        image: '../static/assets/dataset_icons/letters/9.JPG',
        options: [
          { id: 1, text: '  t' },
          { id: 2, text: '  g' },
          { id: 3, text: '  o' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 3, // index of correct answer in options array
      },
      {
        id: 4,
        question: 'fus wlqr fudllao',
        image:'../static/assets/dataset_icons/letters/12.JPG' ,
        options: [
          { id: 1, text: '  ;' },
          { id: 2, text: '  w' },
          { id: 3, text: '  b' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 1, // index of correct answer in options array
      },
      {
        id: 5,
        question: 'fus wlqr fudllao',
        image: '../static/assets/dataset_icons/letters/20.JPG',
        options: [
          { id: 1, text: '  k' },
          { id: 2, text: '  r' },
          { id: 3, text: '  t' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 2, // index of correct answer in options array
      },
      {
        id: 6,
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/2.JPG',
        options: [
          { id: 1, text: '  1' },
          { id: 2, text: '  3' },
          { id: 3, text: '  2' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 3, // index of correct answer in options array
      },
      {
        id: 7,
        question: 'fus b,lalu fudllao',
        image:'../static/assets/dataset_icons/numbers/5.JPG',
        options: [
          { id: 1, text: '  4' },
          { id: 2, text: '  3' },
          { id: 3, text: '  5' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 3, // index of correct answer in options array
      },
      {
        id: 8,
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/7.JPG',
        options: [
          { id: 1, text: '  1' },
          { id: 2, text: '  7' },
          { id: 3, text: '  2' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 2, // index of correct answer in options array
      },
      {
        id: 9,
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/1.JPG',
        options: [
          { id: 1, text: '  7' },
          { id: 2, text: '  1' },
          { id: 3, text: '  4' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 2, // index of correct answer in options array
      },
      {
        id: 10,
        question: 'fus b,lalu fudllao',
        image: '../static/assets/dataset_icons/numbers/4.JPG',
        options: [
          { id: 1, text: '  1' },
          { id: 2, text: '  4' },
          { id: 3, text: '  9' },
          { id: 4, text: '  okafka keye' },
        ],
        answer: 2, // index of correct answer in options array
      },
    ];
  
    const questionnaire = document.getElementById('questionnaire');
    const questionEl = document.getElementById('question');
    const imageEl = document.getElementById('image');
    const optionsEl = document.getElementById('options');
    const submitBtn = document.getElementById('submit-btn');
    const resultEl = document.getElementById('result');
    
    let currentQuestion = 0;
    let userAnswers = [];
   
    function renderQuestion() {
      const button1 = document.getElementById('submit-btn');
      const button2 = document.getElementById('done-btn');
      const currentQuestionData = questions[currentQuestion];
      questionEl.innerText = currentQuestionData.question;
      imageEl.src = currentQuestionData.image;
    
      optionsEl.innerHTML = '';
      currentQuestionData.options.forEach((option) => {
        const optionEl = document.createElement('div');
        optionEl.classList.add('option');
        const inputEl = document.createElement('input');
        inputEl.type = 'radio';
        inputEl.name = 'answer';
        inputEl.value = option.id;
    
        inputEl.addEventListener('change', (e) => {
          submitBtn.disabled = false; // enable submit button
          userAnswers[currentQuestion] = Number(e.target.value);
        });
    
        const labelEl = document.createElement('label');
        labelEl.innerText = option.text;
    
        optionEl.appendChild(inputEl);
        optionEl.appendChild(labelEl);
        optionsEl.appendChild(optionEl);
      });
  
      

      button1.addEventListener('click', () => {
        // Perform some action or check some condition
        const condition = true;
      
        if (currentQuestion === 9) {
          button1.style.display = 'none';
          button2.style.display = 'block';
        }
      });
      // Disable the submit button until an option is selected
      submitBtn.disabled = true;
    }
    
    
    
    function renderFeedback(isCorrect) {
      const feedbackEl = document.createElement('div');
      feedbackEl.classList.add('feedback');
      feedbackEl.innerText = isCorrect ? 'Correct!' : 'Incorrect.';
      optionsEl.appendChild(feedbackEl);
    }
    
    function renderResult() {
      const numCorrectAnswers = userAnswers.filter(
        (answer, index) => answer === questions[index].answer
      ).length;
    
      const resultPercentage = (numCorrectAnswers / questions.length) * 100;
      resultEl.innerText = `You got ${numCorrectAnswers} out of ${questions.length} (${resultPercentage}%) questions correct.`;
    }
    
    function handleNextQuestion() {
      // Check if an option has been selected
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (!selectedOption) {
        alert('Please select an option.');
        return;
      }
    
      // Store the user's answer and render feedback
      const userAnswer = Number(selectedOption.value);
      userAnswers[currentQuestion] = userAnswer;
      const isCorrect = userAnswer === questions[currentQuestion].answer;
      renderFeedback(isCorrect);
    
      // Move to the next question or show the result
      currentQuestion++;
             
      renderQuestion(); 
      
    }
    
    
    
    submitBtn.addEventListener('click', handleNextQuestion);
    
    renderQuestion();
    
  