import {useState} from 'react'

function Display(props){

    const question = props.question

    const [showAnswer, setShowAnswer] = useState(true);

    const onClick = () => setShowAnswer(!showAnswer);

    if (question[0]) {
        return <div>
            <div>
                <h2>Question: {question[0].question}</h2>
                <h3> Category: {question[0].category.title}</h3>
                <h3>Points: {question[0].value}</h3>
            </div>

            <div>
                <h2>Answer: <button onClick={onClick}>{showAnswer ? 'Show answer': 'Hide answer'}</button></h2>
                
                <h2>{!showAnswer ? question[0].answer : null}</h2>
            </div>
        </div>
    }else {
        return <h1>Trivia Game</h1>
    }

    
}

export default Display;