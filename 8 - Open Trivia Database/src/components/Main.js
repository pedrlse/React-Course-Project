import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import getQuestions from "./Questions/getQuestions";
import Question from "./Questions/Question";

export default function Main() {
	const [questionsArray, setQuestionsArray] = useState([]);
	const [checkAnswerButton, setCheckAnswerButton] = useState(false);
	const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);

	const allQuestionsAnswered = questionsArray.every(question => question.selectedAnswer !== "");

	const getQuestionsFromService = () => {
		getQuestions().then(questions => setQuestionsArray(
			questions.map(question => {
				return {
					...question,
					id: nanoid(),
					selectedAnswer: ""
				}
			})
		));
	}

	useEffect(() => getQuestionsFromService(), []);

	useEffect(() => {
		if (questionsArray.length !== 0 && allQuestionsAnswered) {
			let correctAnswers = 0;
			
			questionsArray.forEach(question => {
				if (question.correct_answer === question.selectedAnswer)
					correctAnswers++;
			});

			setCorrectAnswersCount(correctAnswers);
			setCheckAnswerButton(true);
		}
	}, [questionsArray]);


	const handleSelectAnswer = (questionId, answer) => {
		if (!isGameOver) {
			setQuestionsArray(prevQuestionsArray => (
				prevQuestionsArray.map(question => (
					question.id === questionId
						? {...question, selectedAnswer: answer }
						: question
				))
			));
		}
	}

	const checkAnswers = () => {
		if (allQuestionsAnswered) {
			setIsGameOver(true);

			setQuestionsArray(prevQuestionsArray => (
				prevQuestionsArray.map(question => ({...question, showAnswer: true }))
			));
		}
	}

	const resetGame = () => {
		getQuestionsFromService();
		setCheckAnswerButton(false);
		setIsGameOver(false);
	}

	const questionElements = questionsArray.map(question => (
		<Question
			key={question.id}
			id={question.id}
			question={question.question}
			correctAnswer={question.correct_answer}
			incorrectAnswers={question.incorrect_answers}
			difficulty={question.difficulty}
			category={question.category}
			selectedAnswer={question.selectedAnswer}
			showAnswer={question.showAnswer}
			handleSelectAnswer={handleSelectAnswer}
		/>
	));

	return (
		<section>
			{questionElements}

			<div>
				{isGameOver &&
					<h3 className="correct--answers--text">
						You scored {correctAnswersCount}/5 correct answers
					</h3>
				}

				<button
					className={`main--button ${checkAnswerButton
												? "button--check--answers"
												: "button--check--answers--disabled"}`}
					onClick={isGameOver ? resetGame : checkAnswers}
				>
					{isGameOver ? "Play again" : "Check answers"}
				</button>
			</div>
		</section>
	);
}
