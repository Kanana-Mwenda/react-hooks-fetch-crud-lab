import React, {useEffect,useState} from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList() {
const[question,setQuestion]= useState([]);

useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then(response => response.json())
  .then(data => setQuestion(data));
}, []);

function handleAddQuestion (newQuestion){
  setQuestion([...question,newQuestion]);
}
  return (
    <section>
      <h1>Quiz Questions</h1>
      <QuestionForm onAddQuestion ={handleAddQuestion}/>
      <ul>
        {question.map((question) => (
     <QuestionItem  key={question.id} question={question}/>))}</ul>
    </section>
  );
}

export default QuestionList;
