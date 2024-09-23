import React, { useEffect } from 'react'
import AllRoutes from './routes/AllRoutes'
import Lenis from 'lenis'
const App = () => {
  useEffect(()=>{const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)})
  return (<>
    <AllRoutes/>
    </>
  )
}

export default App