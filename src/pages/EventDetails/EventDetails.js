import React from 'react'
import { useParams } from 'react-router-dom'
import { eventList } from '../../utils/EventDatabase'
import "./EventDetails.css"
export default function EventDetails() {
  const mid = useParams();
  console.log("id is ", mid.id);
  const numID = Number(mid.id)

  const filterEventDetail = eventList.find((eventDetail) => {

    return eventDetail.id === numID
  })
  console.log(filterEventDetail)

  const img = filterEventDetail.img
  return (
    <div className='container'>
      <div className="card mb-3  my-card" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{filterEventDetail.heading}</h5>
              <p className="card-text">{filterEventDetail.description}</p>
              <div>
                <span></span>
                <p className="card-text"><small className="text-body-secondary">{filterEventDetail.date.month},{filterEventDetail.date.year},{filterEventDetail.location}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}
