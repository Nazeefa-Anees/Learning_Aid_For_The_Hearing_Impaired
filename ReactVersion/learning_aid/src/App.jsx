
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Splashscreen from './pages/Splashscreen';
import Questionnaire from './pages/Questionnaire';
import QuestionnairePred from './pages/QuestionnairePred';

import HomeSelection from './pages/HomeSelection';
import Learning from './pages/Learning';
import Quiz from './pages/Quiz'
import LearningSelectionLetters from './pages/LearningSelection1';
import LearningSelectionNum from './pages/LearningSelection2';
import Letter1 from './pages/Letter1';
import Letter2 from './pages/Letter2';
import Letter3 from './pages/Letter3';
import Letter4 from './pages/Letter4';
import Letter5 from './pages/Letter5';
import Letter6 from './pages/Letter6';
import Letter7 from './pages/Letter7';
import Letter8 from './pages/Letter8';
import Letter9 from './pages/Letter9';
import Letter10 from './pages/Letter10';
import Letter11 from './pages/Letter11';
import Letter12 from './pages/Letter12';
import Letter13 from './pages/Letter13';
import Letter14 from './pages/Letter14';
import Letter15 from './pages/Letter15';
import Letter16 from './pages/Letter16';
import Letter17 from './pages/Letter17';
import Letter18 from './pages/Letter18';
import Letter19 from './pages/Letter19';
import Letter20 from './pages/Letter20';
import Letter21 from './pages/Letter21';
import Letter22 from './pages/Letter22';
import Letter23 from './pages/Letter23';
import Letter24 from './pages/Letter24';
import Letter25 from './pages/Letter25';
import Letter26 from './pages/Letter26';
import Letter27 from './pages/Letter27';
import Number0 from './pages/Number0';
import Number1 from './pages/Number1';
import Number2 from './pages/Number2';
import Number3 from './pages/Number3';
import Number4 from './pages/Number4';
import Number5 from './pages/Number5';
import Number6 from './pages/Number6';
import Number7 from './pages/Number7';
import Number8 from './pages/Number8';
import Number9 from './pages/Number9';

import Q1 from './pages/Q1';
import Q2 from './pages/Q2';
import Q3 from './pages/Q3';
import Q4 from './pages/Q4';
import Q5 from './pages/Q5';
import Q6 from './pages/Q6';
import Q7 from './pages/Q7';
import Q8 from './pages/Q8';
import Q9 from './pages/Q9';
import Q10 from './pages/Q10';


export default function 
() {
  return (
    <div>  
   
     <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="questionnaire" element={<Questionnaire/>} />
        <Route path='predResult' element={<QuestionnairePred/>} />
        <Route path='home' element={<HomeSelection/>}/>
        <Route path='learningCategory' element={<Learning/>}/>
        <Route path='quizCategory' element={<Quiz/>}/>
        <Route path='let ters' element={<LearningSelectionLetters/>}/>
        <Route path='numbers' element={<LearningSelectionNum/>}/>


        <Route path='letter1' element={<Letter1/>}/>
        <Route path='letter2' element={<Letter2/>}/>
        <Route path='letter3' element={<Letter3/>}/>
        <Route path='letter4' element={<Letter4/>}/>
        <Route path='letter5' element={<Letter5/>}/>
        <Route path='letter6' element={<Letter6/>}/>
        <Route path='letter7' element={<Letter7/>}/>
        <Route path='letter8' element={<Letter8/>}/>
        <Route path='letter9' element={<Letter9/>}/>
        <Route path='letter10' element={<Letter10/>}/>
        <Route path='letter11' element={<Letter11/>}/>
        <Route path='letter12' element={<Letter12/>}/>
        <Route path='letter13' element={<Letter13/>}/>
        <Route path='letter14' element={<Letter14/>}/>
        <Route path='letter15' element={<Letter15/>}/>
        <Route path='letter16' element={<Letter16/>}/>
        <Route path='letter17' element={<Letter17/>}/>
        <Route path='letter18' element={<Letter18/>}/>
        <Route path='letter19' element={<Letter19/>}/>
        <Route path='letter20' element={<Letter20/>}/>
        <Route path='letter21' element={<Letter21/>}/>
        <Route path='letter22' element={<Letter22/>}/>
        <Route path='letter23' element={<Letter23/>}/>
        <Route path='letter24' element={<Letter24/>}/>
        <Route path='letter25' element={<Letter25/>}/>
        <Route path='letter26' element={<Letter26/>}/>
        <Route path='letter27' element={<Letter27/>}/>

        <Route path='number0' element={<Number0/>}/>
        <Route path='number1' element={<Number1/>}/>
        <Route path='number2' element={<Number2/>}/>
        <Route path='number3' element={<Number3/>}/>
        <Route path='number4' element={<Number4/>}/>
        <Route path='number5' element={<Number5/>}/>
        <Route path='number6' element={<Number6/>}/>
        <Route path='number7' element={<Number7/>}/>
        <Route path='number8' element={<Number8/>}/>
        <Route path='number9' element={<Number9/>}/>

        <Route path ='Q1' element={<Q1/>}/>
        <Route path ='Q2' element={<Q2/>}/>
        <Route path ='Q3' element={<Q3/>}/>
        <Route path ='Q4' element={<Q4/>}/>
        <Route path ='Q5' element={<Q5/>}/>
        <Route path ='Q6' element={<Q6/>}/>
        <Route path ='Q7' element={<Q7/>}/>
        <Route path ='Q8' element={<Q8/>}/>
        <Route path ='Q9' element={<Q9/>}/>
        <Route path ='Q10' element={<Q10/>}/>
      </Routes>
  
 

  
    </div>
  )
}