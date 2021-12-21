import React from 'react'

/**
 * Loader component
 * @param {height: number} minHeight
 * @param {width: number} width - like flexBox- between 1 and 12
 * @returns Loader
 */
const Loader = ({ height, width = 12 }) => (
  <div
    className="loader"
    style={{
      minHeight: height,
      // this is Clamp function-- set max-radius 10, min 4 depending on height
      borderRadius: Math.max(4, Math.min(height * 0.1, 10)),
      // Math.min to prevent overflow (width being larger than container)
      width: `${Math.min((100 / 12) * width, 100)}%`,
    }}
  ></div>
)

export default Loader
