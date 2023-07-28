import React from "react"


export default function Card(props){
    
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props.data
    
    return (
            <div className = "card">
                <img className = "card-img" src={imageUrl} />           
                <div className= "card-info">  
                    <div className = "card-location-row">    
                        <img className= "card-map-img" src="./images/map.png" />
                        <p className = "card-location">{location}</p>
                        <a href = {googleMapsUrl} className = "card-google-map">View on Goolge Maps</a>
                    </div>
                    <p className = "card-title">{title}</p>
                    <p className = "card-date">{startDate} - {endDate}</p>
                    <p className = "card-desc">{description}</p>
                </div>       
            </div>
    )
}