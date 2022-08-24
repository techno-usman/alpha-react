import React from 'react'
import Classes from '../scss/common/ellipsis.module.scss'
const PinkEllipsis = (props) => {
  const { className } = props
  return <div className={`${Classes.pinkEllipsis} ${className}`}></div>
}

export default PinkEllipsis
