import React from 'react'
import EventCard from '../../components/EventCard/EventCard'
import { eventList } from '../../utils/EventDatabase'
import Navigation from '../../components/Navigation/Navigation'

export default function EventList() {

    const renderEventCards = () =>{
         return eventList.map(({id,date,heading,location,img})=>{
          return (
          <>
          
            <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location = {location}
                img = {img}
            />
            </>)
        })
    }
  return (
    <div>
      <Navigation/>
      {eventList.length >0 ? (renderEventCards()):(<p>No result</p>)}
    </div>
  )
}
