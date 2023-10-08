import React from 'react'
import Layout from '../../components/layouts/layout'
import NavBar from '../../components/navbar/navbar'

const WatchPage:React.FC = () => {
  return (
    <Layout navBarContent={<NavBar/>} mainContent={<div>Watch</div>}/>
  )
}

export default WatchPage