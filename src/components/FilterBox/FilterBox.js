import React, { useState,useEffect } from 'react'
import './FilterBox.css'

export default function FilterBox({getMonthYear}) {
  const [selectMonth,setMonth] = useState("January")
  const [selectYear,setYear] = useState(2023)

  const yearDisplay = () => {
    const years = [2023, 2024]
    return dataRender(years);
  }

  const monthToDisplay = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return dataRender(months)
  }

  const dataRender = (data) => {
    return data.map((data, index) => {
      return (<option key={index} value={data}>{data}</option>)
    })
  }
  const handleSelectMonth = (e)=>{
    const mon = e.target.value
    setMonth(mon)  
    //console.log(mon)
  }
  const handleSelectYear = (e) =>{
    const y = e.target.value
    setYear(y)
    //console.log(y)

  }
  const parseToParent = ()=>{
    getMonthYear(selectMonth,selectYear);

  }
  const submitEvent = (e)=>{
    e.preventDefault();
    parseToParent();
  }
  useEffect(()=>{
    parseToParent()
  },[])

  return (

    <div>
      <div className="box">
      <form onSubmit={submitEvent}>
        <div className="content">
          <div className="month">
          <lebel>Month:</lebel>
        <select value={selectMonth}  onChange={handleSelectMonth}>
          {monthToDisplay()}
        </select></div>
        <div className="year">
        <label>Year:</label>
        <select value={selectYear} onChange={handleSelectYear}>
          {yearDisplay()}
        </select> </div>
        <div className="button">
        <button  type='submit' className=' btn bg-success' >Find Events</button></div>

        </div>
        
      </form>
      </div>
    </div>
  )
}
