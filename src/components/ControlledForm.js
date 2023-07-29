import { useState } from "react";

function ControlledForm(props){

    const[formData, setFormData] = useState({
        randomQuestion: "",
    });

    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const fetchQuestion = async(randomQuestion) => {
        // const apiKey = 'a6b23e5d';
        const url = `http://jservice.io/api/random`;
        const response = await fetch(url)
        console.log(response)
        const data = await response.json();
        console.log(data)
        props.setQuestion(data)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchQuestion(formData.randomQuestion)
        setFormData({randomQuestion: ""})
    }

    return <div>

        <h2>Controlled Form</h2>
        <form onSubmit={handleSubmit}>
            <input type='submit' name="randomQuestion" value="Random Trivia Question" onChange={handleChange} />
        </form>
        
            
    </div>


}

export default ControlledForm;