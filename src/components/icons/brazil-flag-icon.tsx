import type { SVGProps } from 'react';

export function BrazilFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
      <defs>
        <clipPath id="circle-clip">
          <circle cx="450" cy="300" r="300" />
        </clipPath>
      </defs>
      <g clipPath="url(#circle-clip)">
        <path fill="#009c3b" d="M0 0h900v600H0z" />
        <path fill="#ffdf00" d="M450 65.5L75.5 300 450 534.5l374.5-234.5z" />
        <circle cx="450" cy="300" r="156.5" fill="#002776" />
        <path
          fill="#fff"
          d="M293.5 300a156.5 156.5 0 00227.3 128.8 156.5 156.5 0 01-141.6-193.3 156.5 156.5 0 00-85.7 64.5z"
        />
      </g>
    </svg>
  );
}
