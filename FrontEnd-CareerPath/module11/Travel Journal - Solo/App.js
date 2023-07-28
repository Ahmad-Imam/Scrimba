import React from "react"
import Header from "./Components/Header.js"
import Card from "./Components/Card.js"
import cardData from "./data.js"

export default function App(){
    
    const dataArray = cardData.map(function(card){
        return (
            <Card key={card.title} data={card}/>
        )
    })
    
    return (
        <div className = "app">
            <Header />
            {dataArray}
        </div>
    )
}