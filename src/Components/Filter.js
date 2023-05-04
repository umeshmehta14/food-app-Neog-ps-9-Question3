import React from 'react'
import { useData } from '../Contexts/DataProvider'
import { BiSearchAlt2 } from '../Icons/Icons';

const Filter = () => {
  const {menuItem,searchMenu,handleSort,handleCheckbox} = useData();
  return (
    <div className='filter-container'>
      <h1>Filters:</h1>
      <div className="filter-box">
        <label htmlFor="search">
      <BiSearchAlt2 style={{fontSize: "22px",margin: "-5px 0px"}}/>
    <input list='searches' id="search" className='search' name="search" placeholder='Search Food Here' onChange={searchMenu} />
        </label>
        
        <datalist id="searches">
          {
    menuItem.map(({id,name})=> <option key={id} value={name}/> )
          }
  </datalist>
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
