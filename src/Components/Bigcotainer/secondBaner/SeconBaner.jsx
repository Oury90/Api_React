import React from 'react'
import "./Secon.css"
import Card from '../Card/Card';
import contacts from '../../../Datas';

function getContact(contact){
    return(
      <Card  
      key= {contact.id}
      img={contact.image}
      etoile={contact.etoil}
      telechar={contact.techar}
      />
    )
  }

export default function SeconBaner() {
  return (
    <div className='second-baner'>
        <h2 className='secod-header'>Most Popular Right Now</h2>
        <div className='container-card'>
            {contacts.map(getContact)}
        </div>
        
    </div>
  )
}
