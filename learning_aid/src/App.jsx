
import * as React from 'react';
<<<<<<< Updated upstream
=======
import { Routes, Route } from 'react-router-dom';
import Splashscreen from './pages/Splashscreen';
import Questionnaire from './pages/Questionnaire';
>>>>>>> Stashed changes

import Learning from './pages/Learning';
import Quiz from './pages/Quiz';

export default function 
() {
  return (
    <div>
<<<<<<< Updated upstream
      <Quiz/>
=======
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="questionnaire" element={<Questionnaire />} />
      </Routes>
      
>>>>>>> Stashed changes
    </div>
  )
}