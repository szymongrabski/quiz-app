import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import CameraCapture from "./CameraCapture";
import Question from "./Question";

const Quiz = ({ quizData }) => {
  const navigate = useNavigate();
  const seconds = 10
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [score, setScore] = useState(0);
  const [move, setMove] = useState("");
  const [correctIndex, setCorrectIndex] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const setNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(seconds);
      setSelectedOption("");
    } else {
      setQuizEnded(true);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      if (move === 'accept') {
        if(selectedOption)
          if (parseInt(selectedOption) === correctIndex + 1) {
            setScore(score + 1);
          }
        setNextQuestion();
        setMove('');
      } else if (move === 'decline') {
        setSelectedOption('');
        setMove('');
      } 
    }
  }, [timeLeft, selectedOption, move, correctIndex, score, quizData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
    }, 1000);

    if (quizEnded || timeLeft <= 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [timeLeft, quizEnded]);

  if (!quizEnded) {
    if (timeLeft > 0) {
      return (
        <div>
          <div>
            <Question number={currentQuestion} questionData={quizData[currentQuestion]} setCorrect={setCorrectIndex}/>       
            <p className="text-white text-center">Time left: {timeLeft} seconds</p>
          </div>
        </div>
      );
    } else if (selectedOption === '') {
      return (
        <div className="flex flex-col w-[50%] mx-auto my-5">
          <p className="text-white text-xl font-bold text-center">Show us the answer!</p>
          <CameraCapture setAnswer={setSelectedOption} availableAnswers={["1", "2", "3", "4"]} seconds={5}/>
        </div>
      )
    } else {
      return (
        <div>
          <div className="flex flex-col w-[50%] mx-auto my-5">
            <p className="text-white text-xl font-bold text-center">Selected answer: {selectedOption}, correct?</p>
            <CameraCapture setAnswer={setMove} availableAnswers={["accept", "decline"]} seconds={3}/>
          </div>
        </div>
      )
    }
  } else {
    return(
      <div className="flex flex-col items-center mt-5 gap-5">
        <p className="text-white text-lg font-bold">Your score: {score}</p>
        <button className="text-white bg-purple-700 py-2 px-4 rounded-lg text-center block hover:bg-purple-800 hover:shadow-md" onClick={() => navigate('/')}>Exit</button>
      </div>
    )
  }
};

export default Quiz;
