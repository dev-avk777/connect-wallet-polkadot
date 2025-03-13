import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgTwitter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 32"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#twitter_svg__a)">
      <circle cx={16.5} cy={16} r={16} fill="#009CF0" />
      <path
        fill="#fff"
        d="M26 11.231a7.7 7.7 0 0 1-2.126.583 3.67 3.67 0 0 0 1.623-2.04c-.713.426-1.5.726-2.34.894a3.689 3.689 0 0 0-6.383 2.523c0 .293.025.574.085.842a10.45 10.45 0 0 1-7.606-3.86 3.7 3.7 0 0 0-.505 1.865c0 1.278.658 2.41 1.64 3.067a3.64 3.64 0 0 1-1.668-.455v.04a3.71 3.71 0 0 0 2.957 3.627 3.7 3.7 0 0 1-.968.121c-.236 0-.475-.013-.699-.063a3.725 3.725 0 0 0 3.449 2.57 7.4 7.4 0 0 1-4.576 1.575c-.302 0-.593-.014-.883-.051a10.4 10.4 0 0 0 5.661 1.656c6.79 0 10.503-5.625 10.503-10.5q-.001-.244-.014-.478A7.4 7.4 0 0 0 26 11.231"
      />
    </g>
    <defs>
      <clipPath id="twitter_svg__a">
        <path fill="#fff" d="M.5 0h32v32H.5z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTwitter)
const Memo = memo(ForwardRef)
export default Memo
