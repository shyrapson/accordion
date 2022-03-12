import React,{useState} from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ title, info }) {
    const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
        {showInfo? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
      {/* if show info is true then display info */}
      { showInfo &&  <p>{info}</p>}
     
    </article>
  );
}

export default Question;
