import React, { Fragment } from 'react'

const Layout = (props) => {
  return (
      <Fragment>
      <header className='m-0 text-center bg-primary shadow fixed-top'>
              <h1 className='text-bolder'>RICK & MORTY</h1>
      </header>
      <div style={{marginTop: "60px"}}>
        {
          props.children
        }
      </div>
          
    </Fragment>
  )
}

export default Layout