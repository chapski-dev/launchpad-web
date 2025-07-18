import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={40}
    viewBox="0 0 40 40"
    width={40}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M39.7354 10.8671C39.7354 10.4737 39.5852 10.0803 39.2853 9.78038C38.6856 9.18018 37.7122 9.18018 37.1124 9.78038L19.9776 26.9148L2.84315 9.78038C2.24295 9.18018 1.26999 9.18018 0.66979 9.78038C0.0700308 10.3806 0.0700308 11.3535 0.66979 11.9537L18.8909 30.1748C19.4906 30.775 20.464 30.775 21.0638 30.1748L39.2849 11.9537C39.5852 11.6539 39.7354 11.2605 39.7354 10.8671Z"
      fill="black"
    />
  </svg>
);
const Memo = memo(SvgArrow);
export default Memo;
