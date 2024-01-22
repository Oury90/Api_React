import React from 'react'
import "./Card.css"
export default function Card(props) {
  return (
    <div className='card'>
    <img src={props.img} alt=''/>
    <div className='content-card'>
        <div className='left-card'>
            <span>Fortnite</span>
            <span>Sandbox</span>
        </div>
        <div className='right-card'>
            <span>⭐️ {props.etoile}</span>
            <span>▼{props.telechar}M</span>
        </div>
    </div>
</div>
  )
}
