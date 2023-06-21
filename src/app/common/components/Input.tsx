import { cva } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean
}

const styles = cva(
  'bg-white bg-opacity-5 text-sm shadow-input placeholder:text-white font-medium placeholder:text-sm focus:border-2 focus:border-white focus:outline-none px-6 py-4 text-white rounded-lg',
  {
    variants: {
      fullWidth: {
        true: 'w-full'
      },
    }
  }
);

export function Input({ fullWidth, ...props }: Props) {
  return <input placeholder='Email' className={styles({ fullWidth})} {...props}/>
}