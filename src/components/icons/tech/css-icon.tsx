import type { SVGProps } from 'react';

export function CssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#1572B6" d="M3.3,21l1.8-20.2h13.8L17.1,21L12,22.6L3.3,21z M16.9,6.7H7.4l0.2,2.2h9.1L16,15.2l-4,1.1l-4-1.1L7.7,13H9.8l0.1,1.1l2.1,0.6l2.1-0.6l0.3-2.3H7.2L6.5,4.5h11.2L16.9,6.7z" />
    </svg>
  );
}
