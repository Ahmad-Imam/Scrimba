import React from "react"
import QuizQ from "./QuizQ"
// import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function Quiz ({apiUrl,selectedCat, goHome}){

    const [quizArray, setQuizArray] = React.useState([])
    const [gameOver, setGameOver] = React.useState(false)
    const [score, setScore] = React.useState(0)
    
    React.useEffect(()=>{
            fetch(apiUrl)
            .then(res=> res.json())
            .then(data=> {            
            createQuizArray(data.results)
        })
    },[])
    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        return array
    }
    
    function finishGame(){ 
            const scoreVal = quizArray.filter(quiz=>{
                return quiz.isScored
            })
            setScore(scoreVal.length)
        setGameOver(true)
    }
    
    function updateQuizArray(data) {
        setQuizArray(prevQA => {
            return prevQA.map(quiz => {
                    if (quiz.question === data.question) {
                    return { ...quiz, isScored: data.isScored};
                } else {
                    return quiz;
                }
            });
        });
    }
    
    
    function checkGame(data){
            console.log("answer correct: "+ data.isScored)
            updateQuizArray(data) 
    }
   
    function createQuizArray (data){
            const quizArray = data.map((quiz)=>{
                let correctAns = quiz.correct_answer
                let options = quiz.incorrect_answers
                options.unshift(correctAns)
                shuffleArray(options)
                quiz.optionArray = options
                quiz.correctAnsIndex = options.indexOf(correctAns)
            return quiz
        }) 
        
        setQuizArray(quizArray)
    }
    
    const quizQ = quizArray.map((quiz)=>{ 
        return <QuizQ key = {quiz.question} {...quiz} checkGame = {checkGame} gameOver = {gameOver} /> 
    })
    
    return (
        
        <section className = "quiz"> 
        {score>(quizQ.length/2) && gameOver && <Confetti />}
            <h1 className = "quiz-cat">{selectedCat[0].option}</h1>  
            {quizQ}
            <button className = "finish-game" onClick = {finishGame}> Check Answers </button>
            
            {gameOver && <p className = "score">Your score is {score}/ {quizQ.length}</p>}
            {gameOver && <button className = "finish-game" onClick = {()=> goHome(true)}> Home </button>}
        </section>
    )
    
}