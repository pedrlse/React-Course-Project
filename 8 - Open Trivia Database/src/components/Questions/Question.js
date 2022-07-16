import { nanoid } from "nanoid";

export default function Question(props) {

    const incorrectAnswers = props.incorrectAnswers.map(answer => (
        <button key={nanoid()} className="main--button">{answer}</button>
    ));

    const correctAnswer = <button key={nanoid()} className="main--button">{props.correctAnswer}</button>

    incorrectAnswers.push(correctAnswer);

    let answersElements = incorrectAnswers.sort(() => Math.random());

    return (
        <article className="question--container">
            <h3 className="main--title">{props.question}</h3>
            {answersElements}
        </article>
    );
}
