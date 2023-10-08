import React from 'react'
import Layout from '../../components/layouts/layout'
import NavBar from '../../components/navbar/navbar'

const HomePage:React.FC = () => {
  return (
    <Layout navBarContent={<NavBar/>} mainContent={<div>Home</div>}/>
  )
}

export default HomePage