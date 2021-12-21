export const Spinner = (props) => (
  <svg className="spinner" viewBox="0 0 50 50" {...props}>
    <circle className="path" cx={25} cy={25} r={10} strokeWidth={3} fill="none" />
  </svg>
)

export const SpinningCircles = ({ className, ...props }) => (
  <svg
    width={38}
    height={38}
    stroke="#fff"
    viewBox="0 0 38 38"
    className={`svg-loaders-svg${className ? ` ${className}` : ''}`}
    {...props}
  >
    <g transform="translate(1 1)" strokeWidth={2} fill="none" fillRule="evenodd">
      <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
      <path d="M36 18c0-9.94-8.06-18-18-18">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
)

export const Puff = ({ className, ...props }) => (
  <svg
    width={44}
    height={44}
    stroke="#fff"
    viewBox="0 0 44 44"
    className={`svg-loaders-svg${className ? ` ${className}` : ''}`}
    {...props}
  >
    <g fill="none" fillRule="evenodd" strokeWidth={2}>
      <circle cx={22} cy={22} r={1}>
        <animate
          attributeName="r"
          begin="0s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="0s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={22} cy={22} r={1}>
        <animate
          attributeName="r"
          begin="-0.9s"
          dur="1.8s"
          values="1; 20"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.165, 0.84, 0.44, 1"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          begin="-0.9s"
          dur="1.8s"
          values="1; 0"
          calcMode="spline"
          keyTimes="0; 1"
          keySplines="0.3, 0.61, 0.355, 1"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
)
