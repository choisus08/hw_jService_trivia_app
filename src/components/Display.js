function Display(props){

    const question = props.question

    if (question[0]) {
        return <div>
            <div>
                <h2>Question: {question[0].question}</h2>
                <h3> Category: {question[0].category.title}</h3>
                <h3>Points: {question[0].value}</h3>
            </div>

            <div>
                <h2>Answer: {question[0].answer}</h2>
            </div>
        </div>
    }else {
        return <h1>Try again</h1>
    }

}

export default Display;