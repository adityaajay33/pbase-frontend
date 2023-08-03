import React from 'react'
import "./filter.css"
import Checkbox from '../checkbox/Checkbox'

export default function Filter() {
  return (
    <div className='filterBox'>
        <div className="titleFilter">Filter</div>
        <div className="filterItems">
          <div className="fieldFilter">Industry</div>
          <div className="optionsFilter">
            <Checkbox className="checkboxOption" label="Industrial Design" />
            <Checkbox className="checkboxOption" label="Interior Design" />
            <Checkbox className="checkboxOption" label="Graphic Design" />
            <Checkbox className="checkboxOption" label="Architectural Design" />
            <Checkbox className="checkboxOption" label="UX/UI Design" />
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
        <div className="apply1"><button className="button-10">Apply</button></div>
    </div>
  )
}
