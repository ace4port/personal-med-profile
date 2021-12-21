import React from 'react'
import Backdrop from './Backdrop'

function SimpleModal(props) {
  let classWrapper = ['simple-modal', 'close']
  if (props.isActive) {
    classWrapper = ['simple-modal', 'open']
  }

  return (
    <>
      <Backdrop isActive={props.isActive} close={props.closeModal} />
      <div className={classWrapper.join(' ')}>
        <div className="modal-content">
          <div className="modal-title-container">
            <div className="title-left">
              {props.title && <span className="modal-title">{props.title}</span>}
              <br />
              {props.subtitle && <span className="modal-sub-title">{props.subtitle}</span>}
            </div>
            <div className="title-right">Title Right Content</div>
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </>
  )
}

export default SimpleModal
