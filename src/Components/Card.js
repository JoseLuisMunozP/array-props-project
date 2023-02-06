import React from "react"

function Card (props){

    return(

        <div className="card">
            <div className="card--container">

            <img src={props.item.img} alt='A location' className="card--image"/>

                <div className="card--fullinfo">
                    <div className="card--location">
                        <img src='../Images/location-icon.png' alt='A location' className="card--icon" />
                        <h4 className="card--country">{props.item.country}</h4>
                        <a href={props.item.link} className="card--link">View on Google Maps</a>
                    </div>
                    <h1 className="card--title">{props.item.title}</h1>
                    <h5 className="card--date">{props.item.date}</h5>
                    <p className="card--paragraph">{props.item.description}</p>
                </div>
            </div>
        </div>
        
    )

}



export default Card