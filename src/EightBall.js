import React, {useState} from "react";
import './EightBall.css';

const EightBall = ({answers})=> {
  const defaultAnswer ="Think of a Question";
  const defaultColor ="black";
  const getRandomAnswer =()=>{
    const randomAnswer = Math.floor(Math.random() * answers.length);
    return answers[randomAnswer];
  }  

const setValue=()=>{
  const getAnswer = getRandomAnswer();
   setAnswer(getAnswer.msg);
   setColor(getAnswer.color);
}
const reset =()=>{
    setAnswer(defaultAnswer);
    setColor(defaultColor);
};
const [answer, setAnswer] = useState(defaultAnswer);
const [color, setColor] = useState(defaultColor);

    return (
        <>
        <div className="EightBall" onClick={setValue}  style={{ backgroundColor: color}}>
            <div className="EightBall-center">
              <h2>{answer}</h2>
            </div>
        </div>
        <p>
        <button onClick={reset}  className="EightBall-btn">RESET</button>

        </p>
        </>
    );
}
export default EightBall