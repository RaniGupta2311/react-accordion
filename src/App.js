import React,{useState} from "react";
import Question from "./Question";
import data from "./data";
function App() {
  const [questions,setQues]=useState(data);
  return <main>
      <div className="container">
        <h3>questions and answer about reactjs</h3>
        <section className="info">
           {
            questions.map((question)=>{
                return <Question key={question.id} {...question}/>
            })
           }
       </section>
      </div>
    </main>
  
}

export default App;
