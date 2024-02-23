import React from 'react'
import { Link } from 'react-router-dom'

import "./notfound.css"

const Notfound = () => {
  return (
    <section>
      <div className="conatainer notfound__container">
        <h1>Page Not Found</h1>
        <Link to='/' className='btn'>
          Go Back Home
        </Link>
      </div>
    </section>
  )
}

export default Notfound