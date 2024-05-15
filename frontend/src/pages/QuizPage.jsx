import React from "react";
import { useParams } from 'react-router-dom';
import Quiz from "../components/Quiz";
import { getQuestions } from "../utils/quizApi";
import Header from "../components/Header";

const QuizPage = () => {
    const { category_id } = useParams();

    const quizData = getQuestions(category_id);

    return (
        <div>
            <Header/>
            <Quiz quizData={quizData}/>
        </div>
    )
};

export default QuizPage;
