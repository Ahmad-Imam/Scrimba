import React from "react"
import {decode} from 'html-entities';


export default function QuizQ ({question, optionArray,correctAnsIndex, checkGame, gameOver}){

    const[selectedOption, setSelectedOption] = React.useState();

    const [answerCorrect, setAnswerCorrect] = React.useState(false)
    
    function handleClick(title){
        setSelectedOption(title)
        setAnswerCorrect(title === optionArray[correctAnsIndex])
        checkGame({ select: title, correct: optionArray[correctAnsIndex], question: question, isScored: title === optionArray[correctAnsIndex]})
    }
    
    const options = optionArray.map((option)=> {
            return  (
                <div 
                    style={{
                        background: selectedOption===option? 
                                                            gameOver? 
                                                            answerCorrect? "#94D7A2" 
                                                                         : "#F8BCBC"
                                                                    :"#D6DBF5" 
                                                            : gameOver? 
                                                                        option === optionArray[correctAnsIndex]?"#94D7A2" 
                                                                                         : "white"
                                                                      :"white" 
                    }} 
                    key = {option}
                    onClick= {()=>{
                             !gameOver && handleClick(option)
                            }
                        } className = "quiz-q-option">
                    
                    {decode(option)}   
                    
                </div>
                )
            }
        )
        
    return (    
            <div className = "quiz-q">
                <h1 className = "quiz-q-title">{decode(question)}</h1>
                <div className = "quiz-q-option-row" >
                    {options}
                </div>
            </div>
    )
}