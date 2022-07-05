import React from "react";
import pointer from "../Pointer.png"

export default function Card(props)
{
    return (
        <div  className="card">
            <img src= {props.item.imageUrl} className= "card--image" />
            <div>
                <img src={pointer} className="card--pointer"/>
                <span className="card--location">{props.item.location}</span>
                <a className="card--url" href={props.item.googleMapsUrl}>View in Google Maps</a>
                <p className="card--title">{props.item.title}</p>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--text">{props.item.description}</p>
            </div>
        </div>
    )
}
