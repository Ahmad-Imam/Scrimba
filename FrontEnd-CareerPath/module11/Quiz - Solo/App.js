import React from "react"
import Menu from "./Components/Menu"
import Quiz from "./Components/Quiz"


export default function App (){
    
    const [startGame, setStartGame] = React.useState(false);    
    const [catAr, setCatAr] = React.useState([])
    const [questionNum, setQuestionNum] = React.useState(1)
    const [apiUrl, setApiUrl] = React.useState(" ")
    const [selectedCat, setSelectedCat] = React.useState([{option: "General Knowledge"
, id: 9
}])
    
    
    React.useEffect(()=>{
            // console.log("ok")
            fetch("https://opentdb.com/api_category.php")
            .then(res=> res.json())
            .then(data=> {            
            createQuizCat(data.trivia_categories)
            // console.log(data.trivia_categories)
        })
    },[])
    
    
    function gameStart(event){
        // setStartGame(true);
       
        event.preventDefault()
        //  console.log(event.target.quantity.value)
        // console.log(startGame)
        // console.log(selectedCat)
        // console.log(selectedCat[0].id)
        // console.log(questionNum)
        setApiUrl(`https://opentdb.com/api.php?amount=${questionNum}&category=${selectedCat[0].id}&type=multiple`)
        setStartGame(true)
    }
    
    function goHome(data){
        console.log("i am home")
        setQuestionNum(1)
        setSelectedCat([{option: "General Knowledge", id: 9}])
        setStartGame(false)

    }
    function setCategory(data){
        const cat = catAr.filter(cat=> cat.option == data)
        setSelectedCat(cat)      
    }
    
    function setQNum(data){
        setQuestionNum(data)
    }
   
    function createQuizCat(data){
        const catArray = data.map(cat=>{
            return {
                option: cat.name,
                id: cat.id
            }
        })
        setCatAr(catArray)
    }

    return (
        <main>
            
                {
                    startGame?
                    <Quiz apiUrl = {apiUrl} selectedCat = {selectedCat} goHome = {goHome}  /> :
                    <Menu gameStart = {gameStart} catAr = {catAr} setCategory = {setCategory} setQNum ={setQNum} />
                }
                
            
            
        </main>
    )
}

