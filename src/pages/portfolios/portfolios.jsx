import React from 'react'
import "./portfolios.css"
import Topbar from '../../components/topbar/topbar'
import Feed from '../../components/feed/feed'
import Filter from '../../components/filter/filter'
import Footer from '../../components/footer/footer'

export default function portfolios() {
  return (
    <>
      <Topbar />
      <div className="portfoliosContainer">
        <Filter />
        <Feed />
      </div>
      <Footer/>
    </>
  )
}
