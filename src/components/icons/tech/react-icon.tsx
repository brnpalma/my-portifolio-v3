import type { SVGProps } from 'react';

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
      </g>
    </svg>
  );
}
