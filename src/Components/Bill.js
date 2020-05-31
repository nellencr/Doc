import React from 'react'

function Bill() {
  return (
    <div className="meds">
      <p className="first-p">Add Medication</p>
      <input className="search-bar"/>
      <br/>
      <button className="add">Add</button> 
      <p className="sec-p">Consultation Fee <input type="text" className="rand" /> </p>
    </div>
  )
}

export default Bill
