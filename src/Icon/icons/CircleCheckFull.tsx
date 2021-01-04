import * as React from 'react';

export function CircleCheckFull(props: React.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ stroke: 'none' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
        fill="currentColor"
      />
      <path
        style={{ stroke: 'none' }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.31 8.043a1 1 0 010 1.414l-6.206 6.5a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.414l2.293 2.293 5.5-5.793a1 1 0 011.414 0z"
        fill="#fff"
      />
    </svg>
  );
}
