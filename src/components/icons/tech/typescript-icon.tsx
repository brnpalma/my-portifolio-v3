import type { SVGProps } from 'react';

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#3178C6" d="M0 0h24v24H0z" />
      <path fill="#fff" d="M12.5 15.1h-2L8.7 8.3h2.1l1.1 3.9h.1l1.1-3.9h2.1l-1.8 6.8zm4.2-.2c.5-.3.9-.7 1.2-1.2l-1-1c-.2.3-.5.6-.8.8-.3.2-.6.2-.9.2-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.9s.1-.7.3-.9c.2-.2.5-.3.8-.3.3 0 .5.1.7.2.2.1.4.3.6.5l1-1c-.3-.5-.8-.8-1.3-1-.6-.2-1.2-.3-1.8-.3-1.3 0-2.3.4-3.1 1.2-.8.8-1.2 1.8-1.2 3.1s.4 2.3 1.2 3.1c.8.8 1.8 1.2 3.1 1.2.7 0 1.4-.2 1.9-.5z" />
    </svg>
  );
}
