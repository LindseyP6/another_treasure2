import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import OrganizationPage from './OrganizationPage'

function OrganizationContainer({ orgArray }) {
console.log(orgArray)
  const [card, setCard] = useState([])

  return (
    <div id="organizations">
      <h1 className='orgHeader'>ORGANIZATIONS</h1>
      <p className='orgDescription'>Below are the organizations currently accepting donations.
        <br></br> Click on a links to donate items!</p>
      <div className='orgContainer'>
        <br></br>
        {/* <div className='orgCard'> */}
          {orgArray?.map(org => 
          <div className='orgCard' key={org.id}>
            <h2>{org.name}</h2>
            <p> {org.address} </p>
            <p>{org.telephone}</p>
            <p>{org.hours}</p>
            <Link className='link' key={org.id} to={`/organizations/${org.id}`}>
              <p> Organization Page</p>
            </Link>
            <hr></hr>

          </div>)
          }
        {/* </div> */}
      </div>
    </div>
  )
}

export default OrganizationContainer