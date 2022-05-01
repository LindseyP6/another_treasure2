import React from 'react'

function Filter({orgArray, setSelected}) {

    function handleFilter(e){
        setSelected(e.target.value)
      
      }
      return (
    
        <div className = "filter">
          <label for="organizations">Select a Donation Center:</label>
          <select onChange={handleFilter} name="area" id="filter">
            <option value = "All"> All Items </option>
            { orgArray.map(org => <option value="{org.name}">{org.name}</option>)}
          
          </select>
        </div>
      );
    }

export default Filter