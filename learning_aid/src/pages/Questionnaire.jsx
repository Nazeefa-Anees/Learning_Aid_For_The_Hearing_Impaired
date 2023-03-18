import './questionnaire.css'
import * as React from 'react'
import one from '../assets/dataset_icons/letters/1.jpg'
import two from '../assets/dataset_icons/letters/5.jpg'
import three from '../assets/dataset_icons/letters/9.jpg'
import four from '../assets/dataset_icons/letters/12.jpg'
import five from '../assets/dataset_icons/letters/20.jpg'
import six from '../assets/dataset_icons/numbers/2.jpg'
import seven from '../assets/dataset_icons/numbers/5.jpg'
import eight from '../assets/dataset_icons/numbers/7.jpg'
import nine from '../assets/dataset_icons/numbers/1.jpg'
import ten from '../assets/dataset_icons/numbers/4.jpg'
import { Link } from 'react-router-dom'

const questions = [
  {
    id: 1,
    question:'fus wlqr fudllao',
    image: one,
    options: [
      { id: 1, text: '  j' },
      { id: 2, text: '  w' },
      { id: 3, text: '  n' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 2, // index of correct answer in options array
  },
  {
    id: 2,
    question: 'fus wlqr fudllao',
    image: two,
    options: [
      { id: 1, text: '  j' },
      { id: 2, text: '  w' },
      { id: 3, text: '  n' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 3,
    question: 'fus wlqr fudllao',
    image: three,
    options: [
      { id: 1, text: '  j' },
      { id: 2, text: '  w' },
      { id: 3, text: '  n' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 4,
    question: 'fus wlqr fudllao',
    image: four,
    options: [
      { id: 1, text: '  j' },
      { id: 2, text: '  w' },
      { id: 3, text: '  n' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 5,
    question: 'fus wlqr fudllao',
    image: five,
    options: [
      { id: 1, text: '  j' },
      { id: 2, text: '  w' },
      { id: 3, text: '  n' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 6,
    question: 'fus b,lalu fudllao',
    image: six,
    options: [
      { id: 1, text: '  1' },
      { id: 2, text: '  3' },
      { id: 3, text: '  8' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 7,
    question: 'fus b,lalu fudllao',
    image: seven,
    options: [
      { id: 1, text: '  1' },
      { id: 2, text: '  3' },
      { id: 3, text: '  8' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 8,
    question: 'fus b,lalu fudllao',
    image: eight,
    options: [
      { id: 1, text: '  1' },
      { id: 2, text: '  3' },
      { id: 3, text: '  8' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 9,
    question: 'fus b,lalu fudllao',
    image: nine,
    options: [
      { id: 1, text: '  1' },
      { id: 2, text: '  3' },
      { id: 3, text: '  8' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
  {
    id: 10,
    question: 'fus b,lalu fudllao',
    image: ten,
    options: [
      { id: 1, text: '  1' },
      { id: 2, text: '  3' },
      { id: 3, text: '  8' },
      { id: 4, text: '  okafka keye' },
    ],
    answer: 1, // index of correct answer in options array
  },
];


{/*export default function Questionnaire() {
  return (
    <div className="bg-[url('./assets/rainbow.png')] bg-cover bg-center min-h-screen">
      <div className="flex flex-col h-full">
        
        <QuestionBox1/>
        </div>

  </div>
  )
}
*/}


export default function Questionnaire() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleNextQuestion = () => {
    // Check if the selected option is correct
    const isCorrect = questions[questionIndex].options[selectedOptionId].id === questions[questionIndex].answer;

    // Move to the next question
    setQuestionIndex(questionIndex + 1);

    // Reset the selected option
    setSelectedOptionId(null);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleDoneClick = () => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const currentQuestionData = questions[currentQuestion];
  

  return (
    <div className="bg-[url('./assets/rainbow.png')] bg-cover bg-center min-h-screen ">
      <div className="flex flex-col h-full">
        <div className = 'box flex flex-col items-center'>
          <h2 className='font-custom'>{currentQuestionData.question}</h2>
          <img className=" h-64 resize-y" src={currentQuestionData.image} a lt="sign language gesture" />
          {currentQuestionData.options.map((option) => (
            <div className='font-custom' key={option.id}>
              <input
                type="radio"
                name="answer"
                value={option.id}
                checked={selectedAnswer === option.id}
                onChange={() => handleAnswerSelect(option.id )} // subtract 1 to get index of selected answer
              />
              <label>{option.text}</label>S
            </div>
          ))}
          <br/>
          <button className='font-custom  bg-yellow-500 rounded-full w-32' onClick={handleDoneClick} disabled={selectedAnswer === null}>yrs</button>
        </div>
      </div>
      
      
    </div>
  
  )
}




  

  
