import React from 'react'
import "../Styles/sidebar.css"


const SidebarRow = (props) => {
  return (
    <div className={`sidebar ${props.selected && "selected"}`}>
      <props.Icon className="icon-width"/>
      <h3>{props.title}</h3>
    </div>
  )
}

export default SidebarRow
