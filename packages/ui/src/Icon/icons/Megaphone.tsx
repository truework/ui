import * as React from 'react';

export function Megaphone(props: React.HTMLAttributes<SVGSVGElement>) {
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
        d="M16.7 4.6c-.6 1.1-1 2.8-1 4.7 0 1.9.4 3.5 1 4.7.6 1.2 1.3 1.5 1.7 1.5.4 0 1-.3 1.7-1.5.5-1.2 1-2.8 1-4.7 0-2-.5-3.6-1-4.7-.7-1.2-1.3-1.6-1.7-1.6-.4 0-1 .4-1.7 1.6zM4.1 7.5l10.6-3.4c-.6 1.5-1 3.2-1 5.2 0 1.9.4 3.7 1 5.1L4.1 11a1.6 1.6 0 01-1-1.6v-.2a1.6 1.6 0 011-1.7zm-.6-2l13.9-4.3a3 3 0 011-.2C20 1 21 2.3 21.8 3.7 22.6 5.2 23 7 23 9.3c0 2.1-.4 4-1.2 5.6-.7 1.4-1.8 2.6-3.4 2.6a3 3 0 01-1-.1l-5.5-1.8 1 2.7a2.8 2.8 0 01-1.6 3.6 2.8 2.8 0 01-3.7-1.6L5 13.5 3.5 13A3.6 3.6 0 011 9.3a3.6 3.6 0 012.5-3.7zm6 9.4l-2-.7 2 5.4a.8.8 0 101.4-.6l-1.3-4.1zM19 7.5a2.7 2.7 0 01-1.7 4.5 11.4 11.4 0 010-5.4c.7 0 1.3.4 1.7.9z"
        fill="currentColor"
      />
    </svg>
  );
}
