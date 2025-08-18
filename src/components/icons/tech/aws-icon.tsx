import type { SVGProps } from 'react';

export function AwsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#232F3E" d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z"/>
      <path fill="#FF9900" d="M8.2,14.6l-1.1-2.1l-1.1,2.1H4.3l3-5.2l3,5.2H8.2z M12.8,11.8c0-0.9,0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6s-0.7,1.6-1.6,1.6S12.8,12.7,12.8,11.8z M16.9,9.4l-1.3,4.4h1.6l1.3-4.4h1.7v5.2h-1.6v-2l-0.1,0.1L18,14.6h-1.5l-1.3-4.1h-0.1L14,14.6h-1.5l-1.3-4.1h-0.1L10,14.6H8.5l-1.3-4.1h-0.1L6,14.6H4.3l3-5.2h1.6l1.2,2.1l1.2-2.1h1.6L16.9,9.4z"/>
    </svg>
  );
}
