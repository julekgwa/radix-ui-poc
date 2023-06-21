import { cva } from 'class-variance-authority';
import React, { HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLHtmlElement> {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const styles = cva(
  '', {
    variants: {
      variant: {
      h1: 'text-8xl',
      h2: 'text-6xl',
      h3: 'text-5xl',
      h4: 'text-4xl',
      h5: 'text-2xl',
      h6: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'h5'
    }
  }
);

export function Text({ children, as: Component = 'h1', className}: Props) {
  return (
    <Component className={`${styles()} ${className || ''}`}>{children}</Component>
  )
}
