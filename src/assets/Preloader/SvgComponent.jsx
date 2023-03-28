import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 128 128"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <circle cx={16} cy={64} r={16} fill="#e09494" />
      <circle
        cx={16}
        cy={64}
        r={14.344}
        fill="#e09494"
        transform="rotate(45 64 64)"
      />
      <circle
        cx={16}
        cy={64}
        r={12.531}
        fill="#e09494"
        transform="rotate(90 64 64)"
      />
      <circle
        cx={16}
        cy={64}
        r={10.75}
        fill="#e09494"
        transform="rotate(135 64 64)"
      />
      <circle
        cx={16}
        cy={64}
        r={10.063}
        fill="#e09494"
        transform="rotate(180 64 64)"
      />
      <circle
        cx={16}
        cy={64}
        r={8.063}
        fill="#e09494"
        transform="rotate(225 64 64)"
      />
      <circle
        cx={16}
        cy={64}
        r={6.438}
        fill="#e09494"
        transform="rotate(270 64 64)"
      />
      <circle
        cx={16}
        cy={64}
        r={5.375}
        fill="#e09494"
        transform="rotate(315 64 64)"
      />
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
        calcMode="discrete"
        dur="640ms"
        repeatCount="indefinite"
      />
    </g>
  </svg>
)

export default SvgComponent
