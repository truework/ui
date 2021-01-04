import * as React from 'react';

export function Loading(props: React.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        style={{ stroke: 'none' }}
        fill="currentColor"
        d="M19.9 13c-.5 3.9-3.9 7-7.9 7-4.4 0-8-3.6-8-8s3.6-8 8-8V2C6.5 2 2 6.5 2 12s4.5 10 10 10c5.2 0 9.4-3.9 9.9-9h-2z"
      />
    </svg>
  );
}
