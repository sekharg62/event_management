import React from 'react'
import { Link } from 'react-router-dom';
export default function EventCard({ id, heading, date, location, img }) {
    const { year, month } = date;

    return (

        <div>

            <div style={{
                display: "flex", justifyContent: "center",
                alignItems: "center", padding: "10px"
            }} >
                <div className="card" style={{ width: "20rem" }}>
                    <img src={img} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{heading}</h5>
                        <p className="card-text"><span>Date:{year} {month}</span></p>
                        <p><span>Location: </span>{location}</p>
                        <Link to={`/events/${id}`}>
                            <a className="btn btn-primary">See Details.......</a></Link>
                    </div>
                </div>
            </div>


        </div>

    )
}
