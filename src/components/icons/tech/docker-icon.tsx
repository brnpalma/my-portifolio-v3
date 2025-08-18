import type { SVGProps } from 'react';

export function DockerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#0db7ed" d="M23.2 9.7c-.2-.5-.8-.8-1.3-.6l-2.4.9c-.4.1-.6.5-.5.9l.4 1.1c0 .1.1.2.2.2h-7.1v-2h2v-2h-2v-2h2v-2h-2V4h-2v2h2v2h-2v2h2v2h-2v2h-5c-.2 0-.3-.1-.3-.3l.4-1.1c.1-.4-.1-.8-.5-.9l-2.4-.9c-.5-.2-1.1.1-1.3.6S1.1 10.8 1.6 11l2.4.9c.4.1.6.5.5.9l-.4 1.1v.2c0 .8.2 1.5.6 2.1.6.9 1.5 1.6 2.6 1.9.3.1.5.1.8.1h10.9c.3 0 .5 0 .8-.1 1.1-.3 2-1 2.6-1.9.4-.6.6-1.3.6-2.1v-.2l-.4-1.1c-.1-.4.1-.8.5-.9l2.4-.9c.5-.2.8-.8.6-1.3zM8 8H6v2h2V8zm4 0h-2v2h2V8zm4 0h-2v2h2V8z" />
    </svg>
  );
}
