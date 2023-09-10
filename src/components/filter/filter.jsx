import React, {useState, useEffect} from 'react'
import "./filter.css"
import Checkbox from '../checkbox/Checkbox'

export default function Filter({ onFilterChange }) {

  // Function to handle checkbox selection/deselection
  const [selectedLabels, setSelectedLabels] = useState([]);

  const handleCheckboxChange = (label, checked) => {
    const updatedLabels = [...selectedLabels];

    if (checked) {
      updatedLabels.push(label);
    } else {
      const index = updatedLabels.indexOf(label);
      if (index !== -1) {
        updatedLabels.splice(index, 1);
      }
    }
  
    onFilterChange(updatedLabels);
  }

  return (
    <div className='filterBox'>
        <div className="titleFilter">Filter</div>
        <div className="filterItems">
          <div className="fieldFilter">Industry</div>
          <div className="optionsFilter">
            <div className="checkbox-wrapper">
                <label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange("Industrial Design", e.target.checked)} />
                    <span> Industrial Design </span>

                </label>
            </div>
            <div className="checkbox-wrapper">
                <label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange("Interior Design", e.target.checked)} />
                    <span> Interior Design </span>

                </label>
            </div>
          </div>
          <div className='fieldFilter'>Institution</div>
          <div className="optionsFilter">
            <Checkbox className="checkboxOption" label="Toronto MU" />
            <Checkbox className="checkboxOption" label="Sheridan College" />
            <Checkbox className="checkboxOption" label="OCAD" />
            <Checkbox className="checkboxOption" label="Humber College" />
            <Checkbox className="checkboxOption" label="University of Waterloo" />
          </div>
        </div>
    </div>
  )
}
