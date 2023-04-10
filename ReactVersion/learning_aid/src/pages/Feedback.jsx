import React, { useState } from "react";

function Feedback() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Feedback</h1>
      <p className="text-xl mb-8">{feedback}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReturn}>
        Return to Quiz
      </button>
    </div>
  );
  
}

export default Feedback;
