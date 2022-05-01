import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemForm from './ItemForm'
import EmailForm from './EmailForm'


function OrgCard({addItemForm, itemsArray}) {
const [org, setOrg] = useState([])
const [items, setItems] = useState([])
    
const {id} = useParams()
  useEffect(() => {
    fetch(`/organizations/${id}`)
        .then(r => r.json())
        .then(org =>setOrg(org));
      }, [id])

  // useEffect(() => {
  //   fetch(`/items`)
  //       .then(r => r.json())
  //       .then(items =>setItems(items));
  //     }, [])

  // console.log({id})

  // const displayedItem = <ItemCard1 key={items.id} items={items}/>
  //   if ({id} === items.org_id) {
  //     return displayedItem
  //   }
  
  // const orgItems = items.filter((item) => {
  //     if ({id} === item.organization_id) {
  //       return item
  //     }
  //       });


  return (
      <div className='orgPageSingle'>
        <div className="orgDetails">
          <h1>{org.name}</h1>
          <p>{org.address}</p>
          <p>{org.telephone}</p>
          <p>{org.hours}</p>
          <h3>In need of: {org.needs} </h3>
        </div>
        <div className="orgPic">
          <img src="data:image/jpeg;base64,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" alt={org.name} />
        </div>
        <div className="orgAddItems"> 
          <ItemForm addItemForm={addItemForm} itemsArray={itemsArray}/>
        </div><br></br>
        <div className="orgEmail">
          <EmailForm />
        </div>
      </div>
  )
}

export default OrgCard


