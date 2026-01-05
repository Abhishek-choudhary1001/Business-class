import React from 'react'

export default function BookingForm() {
  return (
  
    <>
  

 <div className='0' style={{backgroundColor: "white", borderRadius:"10px"}}>

     <form>
        <div class="row">
          <input className='inp' type="text" placeholder="From" />
          <input type="text" placeholder="To" />
        </div>

        <div class="row">
          <input type="date" />
          <input type="date" />
        </div>

        <div class="row">
          <select>
            <option selected>Business</option>
            <option>Economy</option>
            <option>First Class</option>
          </select>

          <select>
            <option>1 Traveler</option>
            <option selected >2 Travelers</option>
            <option>3 Travelers</option>
          </select>
        </div>

        <button class="search-btn">SEARCH FLIGHT</button>
      </form>

 </div>

 
   
    
    
    </>
  )
}
