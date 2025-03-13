import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgGithub = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 32"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#github_svg__a)">
      <circle cx={16.5} cy={16} r={16} fill="#009CF0" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M20.767 31.425c-1.359.375-2.79.575-4.267.575-1.238 0-2.443-.14-3.6-.407v-3.726c-4.4.934-5.333-2.133-5.333-2.133-.667-1.867-1.734-2.4-1.734-2.4-1.466-.933.134-.933.134-.933 1.6 0 2.4 1.6 2.4 1.6 1.466 2.4 3.733 1.733 4.666 1.333.134-1.067.667-1.733 1.067-2.133-3.6-.534-7.333-1.867-7.333-8 0-1.734.533-3.2 1.6-4.267-.134-.4-.667-2 .133-4.267 0 0 1.333-.4 4.4 1.6 1.333-.4 2.667-.533 4-.533s2.667.133 4 .533c3.067-2 4.4-1.6 4.4-1.6.933 2.267.4 3.867.133 4.4a6.44 6.44 0 0 1 1.6 4.267c0 6.133-3.733 7.467-7.333 7.867.533.4 1.067 1.466 1.067 2.933v5.29"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="github_svg__a">
        <path fill="#fff" d="M.5 0h32v32H.5z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgGithub)
const Memo = memo(ForwardRef)
export default Memo
