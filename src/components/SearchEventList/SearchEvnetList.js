import React from 'react'
import EventCard from '../EventCard/EventCard'
import { eventList } from '../../utils/EventDatabase'

export default function SearchEvnetList({ monthYear }) {
  const { selectedMonth, selectedYear } = monthYear
  
 console.log(selectedMonth,selectedYear)
  const filterEvents = eventList.filter((eventDetails) => {
   
    return (
      eventDetails.date.year == selectedYear && eventDetails.date.month == selectedMonth
    )
  }
  )
  console.log("lwngth ia",filterEvents.length)
  const renderEventCards = () =>{
    console.log("reder")
     return filterEvents.map(({id,date,heading,location,img})=>{
      return(<EventCard
        key={id}
        id={id}
        date={date }
        heading={heading}
        location = {location}
        img = {img}
    />)
    })
  } 
 
  //console.log(filter)
  return (
    <div>
      <div className='contain'>
       {filterEvents.length > 0 ? (renderEventCards()):(<p className="no-result">Event not present on {selectedMonth},{selectedYear}</p>)} 
       </div>
    </div>
  )
}
