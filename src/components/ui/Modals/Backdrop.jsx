import React from 'react'

/**
 * @param {bool} isActive
 * @param {function} close
 */
const Backdrop = ({ isActive, close }) => {
  return isActive ? <div onClick={close} className="modal-backdrop"></div> : null
}

export default Backdrop
