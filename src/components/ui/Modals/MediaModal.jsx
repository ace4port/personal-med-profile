import React from 'react'
import Backdrop from './Backdrop'

/**
 * VideoModal component
 * @param {isActive: bool} isActive
 * @param {closeModal: func} closeModal
 * @param {children: React.Component} children
 * @default returns Video Modal
 * @returns {React.Component}
 */
function MediaModal({ isActive, closeModal, children }) {
  let classWrapper = ['simple-modal', 'close']
  if (isActive) {
    classWrapper = ['simple-modal', 'open']
  }

  return (
    <>
      <Backdrop isActive={isActive} close={closeModal} />
      <div className={classWrapper.join(' ')}>
        {children ? (
          children
        ) : (
          <iframe
            className="pricing__intro__embed"
            width="850"
            height="528"
            src="https://www.youtube.com/embed/cE0wfjsybIQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </>
  )
}

export default MediaModal
