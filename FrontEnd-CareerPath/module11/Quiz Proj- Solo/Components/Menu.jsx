import React from "react"

export default function Menu ({gameStart,catAr, setCategory ,setQNum}){
    
    const categories = catAr.map(cat=>{
        return <option className = "option-quiz" key = {cat.id} value={cat.option} >{cat.option}</option>
    })

    return (
       
        <section className = "menu-section">
            <h1 className = "menu-title" >Quiz Application</h1>
            <p className = "menu-desc">Choose Quiz Category and Number of question. The application uses Open Trivia Database API</p>
            <form>
                <label htmlFor="categories-dropdown" id="cat-drop-label">Select Quiz Category: </label>
                <select 
                    id="categories-dropdown" 
                    name="categories-dropdown"
                    onChange = {(()=> setCategory(event.target.value))}
                >
                    {categories}
                </select>
                
                <label htmlFor="quantity">Quantity: (1-50) </label>
                <input type="number" id="quantity" onChange = {(()=> setQNum(event.target.value))} name="quantity" min="1" max="5" />
                
                <input type = "submit" value = "Start Quiz" className = "menu-button" onClick = {()=> gameStart(event)}  />
        </form>
        </section>
    )
    
}