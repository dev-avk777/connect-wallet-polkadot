import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgLogoBlue = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 309 272"
    ref={ref}
    {...props}
  >
    <path
      fill="#15ADFF"
      fillRule="evenodd"
      d="M247.097 242.456c0-12.545-10.161-22.716-22.695-22.716H84.598c-12.534 0-22.695 10.171-22.695 22.716v8.619c0 19.264-21.82 28.799-32.712 12.917Q.001 221.435 0 163.37 0 97.082 45.911 48.54 91.823 0 154.758 0q62.42 0 108.331 48.54Q309 97.084 309 163.37q0 56.298-28.849 99.219c-10.86 16.156-33.054 6.698-33.054-12.775z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M76.438 97.592c0-7.732 6.268-14 14-14s14 6.268 14 14v66c0 7.732-6.268 14-14 14s-14-6.268-14-14z"
    />
    <path
      fill="#fff"
      d="M57.438 144.592c-7.732 0-14-6.268-14-14s6.268-14 14-14h66c7.732 0 14 6.268 14 14s-6.268 14-14 14z"
    />
    <path
      fill="#75FBA0"
      d="M246.438 102.592c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14M246.438 158.592c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14M218.438 130.592c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14M274.438 130.592c0 7.732-6.268 14-14 14s-14-6.268-14-14 6.268-14 14-14 14 6.268 14 14"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoBlue)
const Memo = memo(ForwardRef)
export default Memo
