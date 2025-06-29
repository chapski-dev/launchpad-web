import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgLoop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={18}
    viewBox="0 0 19 18"
    width={19}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="li:search">
      <path
        clipRule="evenodd"
        d="M8.71484 3C5.81535 3 3.46484 5.3505 3.46484 8.25C3.46484 11.1495 5.81535 13.5 8.71484 13.5C11.6143 13.5 13.9648 11.1495 13.9648 8.25C13.9648 5.3505 11.6143 3 8.71484 3ZM1.96484 8.25C1.96484 4.52208 4.98692 1.5 8.71484 1.5C12.4428 1.5 15.4648 4.52208 15.4648 8.25C15.4648 11.9779 12.4428 15 8.71484 15C4.98692 15 1.96484 11.9779 1.96484 8.25Z"
        fill="#7E7E7E"
        fillRule="evenodd"
        id="Vector (Stroke)"
      />
      <path
        clipRule="evenodd"
        d="M12.4218 11.957C12.7147 11.6641 13.1896 11.6641 13.4825 11.957L16.745 15.2195C17.0379 15.5124 17.0379 15.9872 16.745 16.2801C16.4521 16.573 15.9772 16.573 15.6843 16.2801L12.4218 13.0176C12.1289 12.7247 12.1289 12.2499 12.4218 11.957Z"
        fill="#7E7E7E"
        fillRule="evenodd"
        id="Vector (Stroke)_2"
      />
    </g>
  </svg>
);
const Memo = memo(SvgLoop);
export default Memo;
