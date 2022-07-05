import React from "react";

export default function Card(props)
{
    return (
        <div>
            <div className="card">
                <img src= {props.item.imageUrl} />
            </div>
        </div>
    )
}
