import React from 'react'
import { useParams } from "react-router-dom"
import Topbar from '../../components/topbar/topbar'
import Footer from '../../components/footer/footer'
import PortfolioList from '../../components/portfolioList/portfolioList'
import UserBackground from '../../components/userBackground/userBackground'
import "./viewPortfolio.css"

export default function ViewPortfolio() {

  const { id } = useParams();
  console.log(id);

  return (
    <div>
        <Topbar />
        <div className="portfolioViewer">
          <PortfolioList userID={ id } />
          <UserBackground userID={ id } />
        </div>
        <Footer />
    </div>
  )
}
