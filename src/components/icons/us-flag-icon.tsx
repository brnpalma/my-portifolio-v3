import type { SVGProps } from 'react';

export function USFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" {...props}>
      <path fill="#fff" d="M0 0h900v600H0z" />
      <path
        fill="#b22234"
        d="M0 0h900v50H0zm0 100h900v50H0zm0 200h900v50H0zm0 300h900v50H0zm0 400h900v50H0zm0 500h900v50H0z"
      />
      <path fill="#3c3b6e" d="M0 0h400v350H0z" />
      <g fill="#fff">
        <g id="us-e">
          <g id="us-d">
            <g id="us-c">
              <g id="us-b">
                <path
                  id="us-a"
                  d="M20 20.9l-6.1-19.1-6.4 18.8L0 19l15.1 12.1-15.3 12 20-1.2-6.5 19 8-18.4L40 42l-15.2-12.1z"
                />
                <use href="#us-a" transform="scale(-1 1)" />
              </g>
              <use href="#us-b" transform="rotate(72)" />
            </g>
            <use href="#us-b" transform="rotate(-72)" />
            <use href="#us-c" transform="rotate(144)" />
          </g>
          <use href="#us-d" x="80" />
          <use href="#us-d" x="160" />
          <use href="#us-d" x="240" />
          <use href="#us-d" x="320" />
        </g>
        <use href="#us-e" y="70" />
        <use href="#us-e" y="140" />
        <use href="#us-e" y="210" />
        <use href="#us-e" y="280" />
        <g id="us-f">
          <use href="#us-d" x="40" />
          <use href="#us-d" x="120" />
          <use href="#us-d" x="200" />
          <use href="#us-d" x="280" />
          <use href="#us-d" x="360" />
        </g>
        <use href="#us-f" y="35" />
        <use href="#us-f" y="105" />
        <use href="#us-f" y="175" />
        <use href="#us-f" y="245" />
        <use href="#us-f" y="315" />
      </g>
    </svg>
  );
}
