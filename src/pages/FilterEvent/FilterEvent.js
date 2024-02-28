import React, { useState } from 'react'
import FilterBox from '../../components/FilterBox/FilterBox'
import SearchEvnetList from '../../components/SearchEventList/SearchEvnetList'
import Navigation from '../../components/Navigation/Navigation'

export default function FilterEvent() {
  const [monthYear,setMonthYear]=useState({
    selectedMonth:null,
    selectedYear:null
  })
  const getMonthYear = (selectedMonth,selectedYear)=>
  {
    setMonthYear({selectedMonth,selectedYear})
    
  }
  return (
    <div>
      <Navigation/>
      
      <FilterBox getMonthYear={getMonthYear}/>
      <SearchEvnetList monthYear={monthYear}/>
    </div>
  )
}
 