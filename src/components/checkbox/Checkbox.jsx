import React from 'react'
import "./checkbox.css"

export default function Checkbox({label}){
  return (
    <div className="checkbox-wrapper">
        <label>
            <input type="checkbox" />
            <span> {label} </span>

        </label>
    </div>
  )
}
