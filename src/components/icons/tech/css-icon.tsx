import type { SVGProps } from 'react';

export function CssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#1572B6" d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0z" />
      <path fill="#33A9DC" d="M12 2.1l7.8 2.2-1.7 17.3-6.1 1.7V2.1z" />
      <path fill="#EBEBEB" d="M12 9.1h3.7l.3-3.3H12V9.1zm0 8.3l3.2-.9.4-4.3H12v-3.2h6.7l-.6 7.2-6.1 1.7v-3.3z" />
      <path fill="#FFFFFF" d="M12 9.1v3.2H8.3l-.2-2.1-.2-1.1H12zm0 5.1v3.3l-2.8-.8-.2-2.5h3z" />
    </svg>
  );
}
