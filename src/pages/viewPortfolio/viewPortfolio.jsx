import React from 'react'
import Topbar from '../../components/topbar/topbar'
import Footer from '../../components/footer/footer'
import PortfolioList from '../../components/portfolioList/portfolioList'
import "./viewPortfolio.css"

export default function ViewPortfolio() {
  return (
    <div>
        <Topbar />
        <div className="portfolioViewer">
          <PortfolioList />
        </div>
        <Footer />
    </div>
  )
}
