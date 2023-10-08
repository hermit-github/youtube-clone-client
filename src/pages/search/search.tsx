import React from 'react'
import Layout from '../../components/layout/layout'
import NavBar from '../../components/navbar/navbar'

const SearchPage:React.FC = () => {
  return (
    <Layout navBarContent={<NavBar/>} mainContent={<div>Search</div>}/>
  )
}

export default SearchPage