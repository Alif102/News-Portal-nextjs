import React from 'react'
import Naavbar from '../Components/Navbar'
import BreakingNewsSlider from '../Components/IndexCom/BreakingNewsSlider'
import AllPost from '../Components/IndexCom/AllPost'

const IndexPages = () => {
  return (
    <div>
      <Naavbar/>
      <BreakingNewsSlider/>
      <AllPost/>
    </div>
  )
}

export default IndexPages
