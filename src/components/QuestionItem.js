import React from "react";

function QuestionItem({ question, onDeleteQuestion,onUpdateQuestion}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleCorrectAnswerChange(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:"PATCH",
      headers:{ "Content-Type": "application/json"},
      body:JSON.stringify({"correctIndex": correctIndex }),
    })
    .then(response => response.json())
    .then(updatedQuestion => onUpdateQuestion(updatedQuestion))
  }
  function handleDeleteQuestionClick(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method:"DELETE",
    })
    .then(response => response.json())
    .then(() => onDeleteQuestion(question));
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}
          onChange={handleCorrectAnswerChange}
        </select>
      </label>
      <button onClick={handleDeleteQuestionClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
