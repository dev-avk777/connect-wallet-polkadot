import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 17"
    ref={ref}
    {...props}
  >
    <path
      fill="#A0A0A0"
      d="M9.717 8 17.3.417a.684.684 0 0 0-.967-.967L8.75 7.033 1.167-.55A.684.684 0 1 0 .2.417L7.783 8 .2 15.583a.684.684 0 1 0 .967.967L8.75 8.967l7.583 7.583a.68.68 0 0 0 .967 0 .684.684 0 0 0 0-.967z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgClose)
const Memo = memo(ForwardRef)
export default Memo
