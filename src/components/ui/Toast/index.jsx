import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  iconColor: 'white',
  showCloseButton: true,
  customClass: {
    popup: 'colored-toast',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})
/**
 *
 * @param {type} success, info, warning, error
 * @param {message} message
 */
export const fireToast = (type, message) => {
  Toast.fire({ icon: `${type}`, title: `${type + ' ' + message}` })
}

export default Toast
