import React, {useState, useEffect} from 'react'
import "./portfolios.css"
import Topbar from '../../components/topbar/topbar'
import Feed from '../../components/feed/feed'
import Filter from '../../components/filter/filter'
import Footer from '../../components/footer/footer'

export default function Portfolios() {
  const [filteredLabels, setFilteredLabels] = useState([]);

  // Function to update the filtered labels state
  const updateFilteredLabels = (labels) => {
    setFilteredLabels(labels);
  };

  return (
    <>
      <Topbar />
      <div className="portfoliosContainer">
        <Filter onFilterChange={updateFilteredLabels} />
        <Feed filteredLabels={filteredLabels} />
      </div>
      <Footer/>
    </>
  )
}
