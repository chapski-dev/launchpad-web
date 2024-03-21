import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgSuccessTrx = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={40}
    viewBox="0 0 40 40"
    width={40}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect fill="#009006" fillOpacity={0.12} height={40} rx={20} width={40} />
    <path
      clipRule="evenodd"
      d="M10.5 20C10.5 14.7529 14.7529 10.5 20 10.5C25.2471 10.5 29.5 14.7529 29.5 20C29.5 25.2461 25.2471 29.5 20 29.5C14.7529 29.5 10.5 25.2461 10.5 20ZM20.75 16.7039C20.75 16.2896 20.4142 15.9539 20 15.9539C19.5858 15.9539 19.25 16.2896 19.25 16.7039V19.2519H16.7001C16.2858 19.2519 15.9501 19.5877 15.9501 20.0019C15.9501 20.4161 16.2858 20.7519 16.7001 20.7519H19.25V23.2967C19.25 23.7109 19.5858 24.0467 20 24.0467C20.4142 24.0467 20.75 23.7109 20.75 23.2967V20.7519H23.2997C23.7139 20.7519 24.0497 20.4161 24.0497 20.0019C24.0497 19.5877 23.7139 19.2519 23.2997 19.2519H20.75V16.7039Z"
      fill="#009006"
      fillRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgSuccessTrx);
export default Memo;
