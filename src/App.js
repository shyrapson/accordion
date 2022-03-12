import React,{useState} from 'react';
import data from './data';
import Question from './Question';
import './App.css'
function App() {
  const [questions, setQuestions] = useState(data)

  return <main>
 <div className='container'>
      <h3>questions and answer about login</h3>
      <section className="info">
        {questions.map((question)=>{
          return <Question key = {questions.id} {...question}/>
        })}
      </section>
      </div>
  </main>
}

export default App
