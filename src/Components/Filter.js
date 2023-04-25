import React from 'react'
import { useData } from '../Contexts/DataProvider'

const Filter = () => {
  const {searchMenu,handleSort,handleCheckbox} = useData();
  return (
    <div>
      <h1>Filters:</h1>
      <div className="filter-box">
        <input type="text" className='search' placeholder='Search Food Here' onChange={searchMenu} />
        <label htmlFor="veg">
            <input type="checkbox"  value ="veg"  id="veg" onChange={()=>handleCheckbox("is_vegetarian")}/>
            Veg
        </label>
        <label htmlFor="spicy">
            <input type="checkbox"  value="spicy" id="spicy" onChange={()=>handleCheckbox("is_spicy")} />
            Spicy
        </label>

        <label htmlFor="LH">
            <input type="radio" name="sort" id="LH" value="LowToHigh" onChange={()=>handleSort("LOW_TO_HIGH")} />
            Sort (Price) Low To High
        </label>
        <label htmlFor="HL">
            <input type="radio" name="sort" id="HL" value="HighToLow" onChange={()=>handleSort("HIGH_TO_LOW")}/>
            Sort (Price) High To Low
        </label>
      </div>
    </div>
  )
}

export default Filter
