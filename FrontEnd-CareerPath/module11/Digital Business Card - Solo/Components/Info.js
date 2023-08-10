import React from "react"

export default function Info (){
    return (
        <div className = "info">
            <img className = "info-img" src = "images/ahmad.jpeg"/>
            <h3 className = "info-title">Ahmad Imam</h3>
            <p className = "info-post">Software Engineer</p>
            <p className = "info-link">ahmadimam.web.app</p>
            <div className = "info-btn">
                <button className="btn-email"><i className="fa fa-envelope"></i> Email</button>
                <button className="btn-ln"><i className="fa fa-linkedin"></i> LinkedIn</button>
            </div>
        </div>
    )
}