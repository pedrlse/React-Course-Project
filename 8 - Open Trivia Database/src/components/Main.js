import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import getQuestions from "./Questions/getQuestions";
import Question from "./Questions/Question";

export default function Main() {
    const [questionsArray, setQuestionsArray] = useState([]);

    useEffect(() => {
        getQuestions().then(questions => setQuestionsArray(questions));
    }, []);

    const questions = questionsArray.map(question => (
        <Question
            key={nanoid()}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            difficulty={question.difficulty}
            category={question.category}
        />
    ));

    return (
        <>
            {questions}
        </>
    );
}
