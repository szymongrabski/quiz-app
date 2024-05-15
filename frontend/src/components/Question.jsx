import React, { useEffect, useState } from "react";

const Question = ({ number, questionData, setCorrect }) => {
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
        const allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
        const shuffled = allAnswers.sort(() => Math.random() - 0.5);
        const correctIndex = shuffled.findIndex(answer => answer === questionData.correct_answer);
        setCorrect(correctIndex)
        setShuffledAnswers(shuffled);
    }, [questionData]);

    const colors = [
        'bg-blue-500',
        'bg-red-500',
        'bg-green-500',
        'bg-yellow-500'
    ]

    return (
        <div className="flex flex-col items-center gap-10 m-5">
            <h2 className="text-xl text-white font-bold">{number + 1}. {questionData.question}</h2>
            <div className="grid grid-cols-2 gap-3">
                {shuffledAnswers.map((answer, index) => (
                    <div key={index} className={` ${colors[index % colors.length]} hover:${colors[(index + 1) % colors.length]} text-xl text-center shadow-sm text-white p-5 rounded-md`}>
                        {index+1}. {answer}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
