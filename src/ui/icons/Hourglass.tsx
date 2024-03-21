import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={24}
    viewBox="0 0 22 24"
    width={22}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M11 16C13 16 16 21 16 21H6C6 21 9 16 11 16Z" fill="#999999" />
    <path
      d="M10.9999 10C12.4668 10 14.4717 8.38605 15.4363 7.52573C15.6058 7.37447 15.6906 7.29884 15.6996 7.22364C15.7072 7.16007 15.6814 7.09257 15.6335 7.05016C15.5767 7 15.4603 7 15.2273 7H6.77241C6.53947 7 6.423 7 6.36626 7.05016C6.3183 7.09257 6.29257 7.16007 6.30013 7.22364C6.30909 7.29884 6.39388 7.37447 6.56346 7.52573C7.52798 8.38605 9.53291 10 10.9999 10Z"
      fill="#999999"
    />
    <path
      clipRule="evenodd"
      d="M13 11.9999C13 11.2847 13.5012 10.6776 14.1706 10.4256C17.5768 9.14325 20 5.85462 20 2H2C2 5.85462 4.42324 9.14325 7.82937 10.4256C8.49878 10.6776 9 11.2847 9 11.9999C9 12.7152 8.49878 13.3222 7.82937 13.5743C4.42324 14.8566 2 18.1453 2 21.9999H20C20 18.1453 17.5768 14.8566 14.1706 13.5743C13.5012 13.3222 13 12.7152 13 11.9999Z"
      fill="#2381CC"
      fillRule="evenodd"
      opacity={0.32}
    />
    <rect fill="#2381CC" height={3} rx={1.5} width={22} y={21} />
    <rect
      fill="white"
      height={3}
      opacity={0.24}
      rx={1.5}
      width={8}
      x={4}
      y={21}
    />
    <rect
      fill="#2381CC"
      height={3}
      rx={1.5}
      transform="matrix(-1 0 0 1 22 0)"
      width={22}
    />
    <rect
      fill="white"
      height={3}
      opacity={0.24}
      rx={1.5}
      transform="matrix(-1 0 0 1 18 0)"
      width={8}
    />
    <path
      d="M7 6C8.65685 6 10 4.65685 10 3H4C4 4.65685 5.34315 6 7 6Z"
      fill="white"
      opacity={0.8}
    />
    <path
      d="M15 18C13.3431 18 12 19.3431 12 21H18C18 19.3431 16.6569 18 15 18Z"
      fill="white"
      opacity={0.8}
    />
  </svg>
);
const Memo = memo(SvgHourglass);
export default Memo;
