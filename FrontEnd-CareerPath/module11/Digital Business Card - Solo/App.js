import About from "./Components/About.js"
import Info from "./Components/Info.js"
import Interest from "./Components/Interest.js"
import Footer from "./Components/Footer.js"
import React from "react"

export default function App(){
    return (
         <div className = "app">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div> 
    )
}