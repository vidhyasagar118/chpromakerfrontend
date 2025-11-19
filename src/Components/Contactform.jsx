import React from 'react'

function Contactform() {
  return (
    <div className='contactinnerdiv'>
      <form >
        <input type="text" placeholder='name' />
        <br />
        <input type="email"  placeholder='Email'/>
        <br />
        <textarea placeholder='message'></textarea>

        <br />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Contactform
