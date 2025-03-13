import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgTelegram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 32"
    ref={ref}
    {...props}
  >
    <g clipPath="url(#telegram_svg__a)">
      <circle cx={16.5} cy={16} r={16} fill="#009CF0" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M22.275 9.591a1.29 1.29 0 0 1 1.248.167c.174.132.308.306.39.505.081.198.106.415.072.626L22.14 22.478c-.032.205-.12.398-.252.561-.133.163-.306.29-.505.37a1.29 1.29 0 0 1-1.217-.144l-5.444-3.873a.8.8 0 0 1-.237-.263.784.784 0 0 1 .16-.969l5.08-4.633a.197.197 0 0 0 .02-.27.214.214 0 0 0-.277-.044l-6.716 4.23a2.583 2.583 0 0 1-1.97.32L7.632 17a.84.84 0 0 1-.435-.262.782.782 0 0 1-.071-.94.83.83 0 0 1 .39-.32z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="telegram_svg__a">
        <path fill="#fff" d="M.5 0h32v32H.5z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgTelegram)
const Memo = memo(ForwardRef)
export default Memo
