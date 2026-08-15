import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

function createIcon(path: string, viewBox = "0 0 24 24") {
  return function Icon({ className, ...props }: IconProps) {
    return (
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d={path}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
}

export const MailIcon = createIcon("M4 4h16v16H4V4Zm0 2 8 6 8-6");

export const LinkedInIcon = createIcon(
  "M4 9h4v11H4V9Zm2-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 5h4v2c.6-1.2 1.8-2 3.5-2 2.5 0 4.5 1.6 4.5 5v8h-4v-7c0-1.7-.7-2.7-2.1-2.7-1.2 0-2 .8-2.4 1.6-.1.3-.2.7-.2 1.1v7h-4V9Z",
);

export const FacebookIcon = createIcon(
  "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z",
);

export const InstagramIcon = createIcon(
  "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm8-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
);

export const TikTokIcon = createIcon("M14 2v13.5a4.5 4.5 0 1 1-4-4.47V7a8 8 0 0 0 8 1V2h-4Z");
