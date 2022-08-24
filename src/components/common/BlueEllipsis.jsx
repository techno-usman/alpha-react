import React from 'react'
import Classes from '../scss/common/ellipsis.module.scss'
const BlueEllipsis = (props) => {
  const { className } = props
  return <div className={`${Classes.blueEllipsis} ${className}`}></div>
}

export default BlueEllipsis
