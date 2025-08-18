import type { SVGProps } from 'react';

export function BgAnimation(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
        viewBox="0 0 800 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0 h-full w-full"
        {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'hsl(var(--primary))'}} />
          <stop offset="100%" style={{stopColor: 'hsl(var(--accent))'}} />
        </linearGradient>
      </defs>
      <g opacity="0.3">
        {/* Static Dashed Circle */}
        <circle 
          cx="400" 
          cy="400" 
          r="300" 
          stroke="hsl(var(--border))" 
          strokeWidth="1" 
          strokeDasharray="4 8"
        />

        {/* Pulsing Circles */}
        <circle cx="400" cy="400" r="200" stroke="url(#grad1)" strokeWidth="1.5">
          <animate 
            attributeName="r"
            values="200;350;200"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity"
            values="1;0;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="400" cy="400" r="250" stroke="url(#grad1)" strokeWidth="1.5">
          <animate 
            attributeName="r"
            values="250;400;250"
            begin="4s"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate 
            attributeName="opacity"
            values="1;0;1"
            begin="4s"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Rotating Dashed Circle */}
        <circle 
          cx="400" 
          cy="400" 
          r="380" 
          stroke="hsl(var(--border))" 
          strokeWidth="1" 
          strokeDasharray="10 20"
        >
           <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 400 400"
            to="360 400 400"
            dur="50s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
