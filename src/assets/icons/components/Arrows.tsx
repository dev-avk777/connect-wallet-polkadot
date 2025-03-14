import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'

const SvgArrows = (
  { color = 'currentColor', ...props }: SVGProps<SVGSVGElement> & { color?: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 33 32"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M2.49933 19.0635C2.49933 18.7441 2.62096 18.4246 2.86433 18.1806C3.35189 17.6919 4.14339 17.6909 4.63214 18.1784L15.615 29.1343C16.1034 29.6227 16.8965 29.6227 17.3838 29.1354L28.3679 18.1784C28.8566 17.6909 29.6481 17.6919 30.1357 18.1806C30.6232 18.6694 30.6223 19.4609 30.1335 19.9485L19.1507 30.9043C17.6896 32.3654 15.3105 32.3654 13.8483 30.9032L2.86658 19.9485C2.62177 19.7043 2.49933 19.3839 2.49933 19.0635ZM16.5 25.1888C17.1905 25.1888 17.7501 24.6291 17.7501 23.9387V1.25006C17.7501 0.559625 17.1904 0 16.5 0C15.8096 0 15.25 0.559625 15.25 1.25006L15.25 23.9387C15.25 24.6291 15.8096 25.1888 16.5 25.1888Z"
      fill={color}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrows)
const Memo = memo(ForwardRef)
export default Memo
