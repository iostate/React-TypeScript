import { useState } from "react";
import "./GuestList.css"
import React from 'react'

const GuestList: React.FC = () => {
  // Must provide default values to state. We gave name empty string, and guests, empty array.
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([])

  const onClick = () => {
    setName(''); // resets field
    // means we are 
    setGuests([...guests, name]);
  }

  return <div className="guest-list">
    <h3>GuestList</h3>
    {/* {(guests.length > 10) ? (<div>{guests[0]}</div>) : ''} */}
    <ul>
      {guests.map((guest) => (
        <li key={guest}>{guest}</li>
      ))}
    </ul>
    <span className="form-input">Guest Name: </span>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onClick}>Add Guest</button>
    <h4>{name}</h4>
  </div>

}

export default GuestList;