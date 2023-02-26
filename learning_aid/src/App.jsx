
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Splashscreen from './pages/Splashscreen';
import Questionnaire from './pages/Questionnaire';
import QuestionnairePred from './pages/QuestionnairePred';

export default function 
() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="questionnaire" element={<Questionnaire />} />
        <Route path='pred' element={<QuestionnairePred/>} />
      </Routes>
      
    </div>
  )
}