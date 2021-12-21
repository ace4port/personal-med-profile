import React from 'react'
import { TickIcon } from './icons/Tick'
import { Spinner } from './loaders/Spinners'

/**
 *
 * @param {handleCLick} func
 * @param {variant} [primary, seconday, outlined, danger, info, warning, danger]
 * @param {type} button type
 * @returns
 */
const Button = ({
  handleClick,
  variant = 'primary',
  rounded = false,
  disabled = 'false',
  label = 'Button',
  type = 'button',
  children,
  ...props
}) => (
  <button
    onClick={handleClick}
    type={type}
    className={`btn ${rounded ? 'btn__round' : ''} btn--${variant} `}
    disabled={disabled === 'true' || variant === 'disabled' ? true : false}
    {...props}
  >
    {children || label}
  </button>
)

export default Button

/**
 * For api calls- states indicate status
 * @param {status} [loading, error, success]
 * @returns
 */
export const AnimatedButton = ({ handleClick, status, children, ...props }) => {
  const loading = status === 'loading'
  const success = status === 'success'
  const error = status === 'error'
  return (
    <button onClick={handleClick} className={`btn btn--primary button ${status}`} {...props}>
      {loading ? <Spinner /> : success ? <TickIcon /> : error ? '!' : children}
    </button>
  )
}

export const RoundButton = (props) => <Button {...props} rounded />

export const OutlinedButton = (props) => <Button {...props} variant="outlined" />

export const PlainButton = (props) => <Button {...props} variant="plain" />
