import React, { useState } from 'react';
import QuestionList from './QuestionList';
import './Quiz.css';

function Quiz() {
  const questions = [
    {
      question: "What is React ?",
      options: ['css Framework', 'React Library', 'React Framework', 'Testing tool'],
      answer: 'React Library'
    },
    {
      question: 'What is 1 + 2?',
      options: ['3', '1', '4', '5'],
      answer: '3'
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer]= useState(null);
  const [ score, setScore] = useState(0);
  const handleClick = (option) => {
    setCurrentAnswer(option)
    if(option === questions[currentQuestionIndex] .answer){
        setScore(score + 1) 
    }
  }
  const handleNextQuestion = ()=>{
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  }

  return (
    <div>  
        {currentQuestionIndex < questions.length? <div>
      <QuestionList
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options} handleClick=
        {handleClick } currentAnswer = {currentAnswer}
      />
      <button disabled = {currentAnswer === null} className={currentAnswer===
         null? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
    </div> : <div> Your Score is {score}</div> } 
    
    </div>
  );
}

export default Quiz;