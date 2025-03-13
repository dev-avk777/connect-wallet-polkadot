/* eslint-disable react/display-name */
import type { SVGProps } from 'react'
import { forwardRef, memo } from 'react'

const SvgPolkadot = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    viewBox="0 0 8382 8382"
    ref={ref}
    {...props}
  >
    <defs>
      <style>{'.fil0 {fill:#E60079} .fil1 {fill:white;fill-rule:nonzero}'}</style>
    </defs>
    <g>
      <path
        className="fil0"
        d="M4191 -2c2316,0 4193,1877 4193,4193 0,2316 -1877,4193 -4193,4193 -2316,0 -4193,-1877 -4193,-4193 0,-2316 1877,-4193 4193,-4193z"
      />
      <g>
        <path
          className="fil1"
          d="M4191 1190c598,0 1082,282 1082,630 0,348 -485,630 -1082,630 -598,0 -1082,-282 -1082,-630 0,-348 485,-630 1082,-630z"
        />
        <path
          className="fil1"
          d="M4191 5933c598,0 1082,282 1082,630 0,348 -485,630 -1082,630 -598,0 -1082,-282 -1082,-630 0,-348 485,-630 1082,-630z"
        />
        <path
          className="fil1"
          d="M1592 2690c299,-518 785,-796 1087,-622 301,174 303,735 4,1252 -299,518 -785,796 -1087,622 -301,-174 -303,-735 -4,-1252z"
        />
        <path
          className="fil1"
          d="M5700 5062c299,-518 785,-796 1086,-623 301,174 303,734 4,1252 -299,518 -785,796 -1086,623 -301,-174 -303,-734 -4,-1252z"
        />
        <path
          className="fil1"
          d="M1596 4439c301,-174 788,105 1087,622 299,518 297,1078 -4,1252 -301,174 -788,-105 -1087,-622 -299,-518 -297,-1078 4,-1252z"
        />
        <path
          className="fil1"
          d="M5704 2068c301,-174 787,105 1086,623 299,518 297,1078 -4,1252 -301,174 -787,-105 -1086,-623 -299,-518 -297,-1078 4,-1252z"
        />
      </g>
    </g>
  </svg>
))

export default memo(SvgPolkadot)
