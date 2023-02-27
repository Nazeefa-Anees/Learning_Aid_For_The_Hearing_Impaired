
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Splashscreen from './pages/Splashscreen';
import Questionnaire from './pages/Questionnaire';
import QuestionnairePred from './pages/QuestionnairePred';
import HomeSelection from './pages/HomeSelection';
import Learning from './pages/Learning';
import LearningSelectionLetters from './pages/LearningSelection1';
import LearningSelectionNum from './pages/LearningSelection2';

export default function 
() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path='result' element={<QuestionnairePred/>} />
        <Route path='home' element={<HomeSelection/>}/>
        <Route path='learningCategory' element={<Learning/>}/>
        <Route path='letters' element={<LearningSelectionLetters/>}/>
        <Route path='numbers' element={<LearningSelectionNum/>}/>
      </Routes>
      
    </div>
  )
}