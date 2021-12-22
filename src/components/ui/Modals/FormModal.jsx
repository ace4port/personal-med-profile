import React from 'react'
import Backdrop from './Backdrop'

function FormModal(props) {
  let classWrapper = ['form-modal', 'close']
  if (props.isActive) {
    classWrapper = ['form-modal', 'open']
  }

  return (
    <>
      <Backdrop isActive={props.isActive} close={props.closeModal} />
      <div className={classWrapper.join(' ')}>
        <div className="modal-content">
          <div className="modal-title-container">
            {props.title && <h4 className="modal-title">{props.title}</h4>}
            {props.subtitle && <br />}
            {props.subtitle && <span className="modal-sub-title">{props.subtitle}</span>}
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </>
  )
}

export default FormModal
