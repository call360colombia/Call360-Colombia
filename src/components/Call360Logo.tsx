'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface Call360LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'monochrome' | 'gold';
  className?: string;
}

const SIZE_MAP = {
  xs: { height: 20 },
  sm: { height: 24 },
  md: { height: 28 },
  lg: { height: 36 },
  xl: { height: 48 },
};

export function Call360Logo({ size = 'md', variant = 'default', className }: Call360LogoProps) {
  const s = SIZE_MAP[size];

  const gradId = `c360-grad-${size}-${variant}`;
  const gradColors =
    variant === 'white'
      ? { from: '#ffffff', to: '#cbd5e1' }
      : variant === 'gold'
        ? { from: '#fef08a', to: '#f59e0b' }
        : variant === 'monochrome'
          ? { from: '#94a3b8', to: '#64748b' }
          : { from: '#06b6d4', to: '#3b82f6' };

  return (
    <div className={cn('inline-flex items-center select-none', className)} style={{ height: s.height }}>
      <svg
        viewBox="0 0 180 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '100%', width: 'auto' }}
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={gradColors.from} />
            <stop offset="100%" stopColor={gradColors.to} />
          </linearGradient>
        </defs>

        {/* Headset icon (forms the "C") */}
        <g transform="translate(2, 4)">
          <path
            d="M38 8 C38 8 42 4 46 4 C54 4 60 10 60 18 C60 26 54 32 46 32"
            stroke={`url(#${gradId})`}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M38 14 C38 14 41 11 44 11 C50 11 54 15 54 20 C54 25 50 29 44 29"
            stroke={`url(#${gradId})`}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <rect
            x="30"
            y="16"
            width="8"
            height="14"
            rx="4"
            fill={`url(#${gradId})`}
          />
          <path
            d="M32 30 C32 38 38 42 44 42"
            stroke={`url(#${gradId})`}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="46" cy="42" r="3" fill={`url(#${gradId})`} />
        </g>

        {/* "all360" text */}
        <text
          x="72"
          y="42"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="32"
          letterSpacing="-0.5"
          fill={`url(#${gradId})`}
        >
          all360
        </text>
      </svg>
    </div>
  );
}
