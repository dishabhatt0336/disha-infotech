import React from "react";

const LogoIcon = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="64" height="64" rx="12" fill="currentColor" />
      <path d="M18 20H46V26H26V44H18V20Z" fill="white" />
      <path d="M30 32H46V44H30V32Z" fill="white" />
    </svg>
  );
};

export default LogoIcon;
