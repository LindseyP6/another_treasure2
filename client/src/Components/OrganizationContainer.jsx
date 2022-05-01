import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import OrganizationPage from './OrganizationPage'

function OrganizationContainer({ orgArray }) {
console.log(orgArray)
  const [card, setCard] = useState([])

  // const {id} = useParams()
  //   useEffect(() => {
  //     fetch(`/organizations/${id}`)
  //         .then(r => r.json())
  //         .then(card =>setCard(card));
  //       }, [id])

  return (
    <>
      <h2 className='orgHeader'>ORGANIZATIONS</h2>
      <p className='orgDescription'>Below are the organizations currently accepting donations.
        <br></br> Click on a links to donate items!</p>
      <div className='orgContainer'>
        <br></br>
        <div className='orgCard'>
          {orgArray?.map(org => <div>
            <h1>{org.name}</h1>
            <p> {org.address} {org.telephone}</p>
            <Link className='link' key={org.id} to={`/organizations/${org.id}`}>
              <p> Organization Page</p>
            </Link>

          </div>)
          }
        </div>
      </div>
    </>
  )
}

export default OrganizationContainer