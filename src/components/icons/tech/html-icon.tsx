import type { SVGProps } from 'react';

export function HtmlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#E34F26" d="M1.5 0h21l-1.9 21.6L12 24l-8.6-2.4L1.5 0z" />
      <path fill="#F16529" d="M12 2.1V22l7.8-2.2L21.5 2.1H12z" />
      <path fill="#EBEBEB" d="M12 4.5v3.2h6.7l-.2 2.1h-6.5v3.2h3.4l-.3 3.3-3.1.9v3.3l6.1-1.7.7-7.9H12V4.5z" />
      <path fill="#FFFFFF" d="M12 4.5v3.2H5.3l.2-2.1H12V4.5zm0 5.3v3.2H8.3l-.2-2.1-.2-1.1H12zm0 5.1v3.3l-2.8-.8-.2-2.5h3z" />
    </svg>
  );
}
