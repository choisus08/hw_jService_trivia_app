import {useState} from 'react'

function Display(props){

    const question = props.question

    const [counter, setCounter] = useState(0)

    const [hideAnswer, setHideAnswer] = useState(true);

    const clickAnswer = () => setHideAnswer(!hideAnswer);

    if (question[0]) {
        return <div>
            <div>
                <h1>Trivia Game</h1>
                <h2>Score: {counter}</h2>
                <div className='Score'>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                    <button onClick={() => setCounter(counter - 1)}>-</button>
                    <button onClick={() => setCounter(0)}>Reset</button>
                </div>
                <div>
                    <h2>Question: {question[0].question}</h2>
                    <h3> Category: {question[0].category.title}</h3>
                    <h3>Points: {question[0].value}</h3>
                </div>
            </div>

            <div>
                <h2>Answer: <button onClick={clickAnswer}>{hideAnswer ? 'Show answer': 'Hide answer'}</button></h2>
                <h2>{!hideAnswer ? question[0].answer : null}</h2>
            </div>
        </div>
    }else {
        return <h1>Trivia Game</h1>
    }

}

export default Display;