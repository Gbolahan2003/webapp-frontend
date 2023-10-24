import React from 'react'
import About from './components/About'
import HomeFooter from '@/Components/HomeFooter'
import '../../Styles/About.css'
const page = () => {
  const style={
    borderBottom:'3px solid #FDFDFD'
  }
  return (
    <div>
    <div style={style} className="about">
    <About/>
    </div>
    <div className="footer">
    <HomeFooter/>
    </div>
  </div>
  )
}

export default page