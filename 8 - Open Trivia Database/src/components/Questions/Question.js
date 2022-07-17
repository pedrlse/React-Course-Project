import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question(props) {

    const incorrectAnswers = props.incorrectAnswers.map(answer => (
        <button key={nanoid()} className="main--button">{decode(answer)}</button>
    ));

    const correctAnswer = <button key={nanoid()} className="main--button">{decode(props.correctAnswer)}</button>

    incorrectAnswers.push(correctAnswer);

    let answersElements = incorrectAnswers.sort(() => Math.random());

    return (
        <article className="question--container">
            <h3 className="main--title">{decode(props.question)}</h3>
            {answersElements}
        </article>
    );
}
