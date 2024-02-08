

import React ,{useState}from 'react'
import Result from './Result'


export default function QuestionBox(props) {
  const [mode, setmode] = useState(true);
  const [active, setactive] = useState("Light");
  const [correctQue, setcorrectQue] = useState(0);
  const [queNo, setqueNo] = useState(0);
  const [highlight,setHighlight] = useState(false)
  const toggleTheme = {
    backgroundColor: mode ? "darkgray"  : "grey",
    color: mode ? "white" : "black",
    backgroundImage: mode ? `url(${'https://static.vecteezy.com/system/resources/thumbnails/008/889/844/small/quiz-set-in-doodle-style-illustration-icon-question-symbol-for-print-and-design-quiz-and-exam-concept-isolated-element-on-black-background-collection-of-sign-for-school-and-event-vector.jpg'})` : `url(${'https://img.freepik.com/free-vector/question-marks-background_78370-2896.jpg'})`
  };
  const toggleBoxTheme = {
    backgroundColor: mode ? "lightgrey" : "darkgrey",
    color: mode ? "black" : "white",
    
  };
  const changeMode = () => {
    if (mode) {
      setmode((mode) => !mode);
      setactive((active) => "Dark");
    } else {
      setmode((mode) => !mode);
      setactive((active) => "Light");
    }
  };
  const CheckAnswer = (id) => {
    if (props.Questions[queNo].options[id].isCorrect) {
      setcorrectQue(correctQue + 1);
    }
    console.log(props.Questions[queNo].options[id].isCorrect);
    setqueNo(queNo + 1);
  };
  const HighlightText = {
    color: highlight ? "red":"black"
  }
  const Highlight = () => {
    if(!highlight){
      setHighlight(highlight => !highlight)
    }
  }
  const RemHighlight = () => {
    if(highlight){
      setHighlight(highlight => !highlight)
    }
  }
  if (queNo < 5) {
    return (
      <div className="QuestionBox" style={toggleTheme}>
        <div className="Header">
          <div className='logo_section'>
          <img src="logo.jpeg" alt="Logo" className="logo" />
          <h1>CodeCraze: React Riddles</h1>
          </div>
          <button className="modeToggle" onClick={changeMode}>
            {active}
          </button>
        </div>
        <div className="questionBox" style={toggleBoxTheme}>
          <h2> Question <span>{queNo + 1}</span> out of 5
</h2>
          <h3 className="question" style={HighlightText}>{props.Questions[queNo].text}</h3>
          <div className="Options-box">
            <button className="Option-button" onClick={() => CheckAnswer(0)}>
              {props.Questions[queNo].options[0].text}
            </button>
            <button className="Option-button" onClick={() => CheckAnswer(1)}>
              {props.Questions[queNo].options[1].text}
            </button>
            <button className="Option-button" onClick={() => CheckAnswer(2)}>
              {props.Questions[queNo].options[2].text}
            </button>
            <button className="Option-button" onClick={() => CheckAnswer(3)}>
              {props.Questions[queNo].options[3].text}
            </button>
          </div>
          <div className="highlightButtons">
            <button onClick={Highlight}>Highlight</button>
            <button onClick={RemHighlight}>Remove highlight</button>
          </div>
        </div>
      </div>
    );
  } else {
  return (
    <div className='QuestionBox' style={toggleTheme}>
      <div className="Header">
          
          <button className="modeToggle" onClick={changeMode}>
            {active}
          </button>
        </div>
        <Result Result = {correctQue}/>
    </div>
  )
}
}
