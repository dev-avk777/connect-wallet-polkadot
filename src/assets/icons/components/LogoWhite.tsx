import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgLogoWhite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 155 136"
    ref={ref}
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M124.048 121.228c0-6.272-5.08-11.358-11.347-11.358H42.799c-6.267 0-11.347 5.086-11.347 11.358v4.309c0 9.633-10.91 14.4-16.356 6.459Q.5 110.717.5 81.685q0-33.144 22.956-57.415Q46.41 0 77.879 0q31.21 0 54.165 24.27Q155 48.542 155 81.685q0 28.15-14.425 49.609c-5.429 8.078-16.527 3.349-16.527-6.387z"
      clipRule="evenodd"
    />
    <path fill="#15ADFF" d="M38.719 48.796a7 7 0 1 1 14 0v33a7 7 0 1 1-14 0z" />
    <path fill="#15ADFF" d="M29.219 72.296a7 7 0 1 1 0-14h33a7 7 0 1 1 0 14z" />
    <path
      fill="#75FBA0"
      d="M123.719 51.296a7 7 0 1 1-14 0 7 7 0 0 1 14 0M123.719 79.296a7 7 0 1 1-14 0 7 7 0 0 1 14 0M109.719 65.296a7 7 0 1 1-14 0 7 7 0 0 1 14 0M137.719 65.296a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgLogoWhite)
const Memo = memo(ForwardRef)
export default Memo
