import { cva } from 'class-variance-authority';
import classNames from 'classnames';

interface Props {
  label?: string;
  className?: string;
  as?: React.ElementType;
  variant?: 'solid' | 'outlined' | 'plain';
  children?: React.ReactNode;
  fullWidth?: boolean;
  modifier?: 'plain' | 'round';
}

const styles = cva(
  'shadow-button leading-7 font-medium text-sm p-3', {
    variants: {
      variant: {
        plain: 'rounded-md text-light-grey',
        solid: 'rounded-md text-bright-pink bg-light-grey',
        outlined: 'rounded-md border-2 text-light-grey bg-button-outlined'
      },
      fullWidth: {
        true: 'w-full'
      },
      modifier: {
        plain: 'bg-white',
        round: '!rounded-full w-12 h-12 flex justify-center items-center'
      }
    },
    compoundVariants: [
      {
        modifier: 'plain',
        className: 'bg-white'
      }
    ],
    defaultVariants: {
      variant: 'plain',
    }
  }
);

export function Button({
  variant = 'plain',
  as: Component = 'button',
  label,
  children,
  fullWidth,
  modifier,
  className: cls,
  ...props
}: Props) {

  console.log('MODIFIER', modifier);

  return (
    <Component className={classNames(`${styles({ variant, fullWidth, modifier })} ${cls || ''}`)} {...props}>
      {children ? children : label}
    </Component>
  );
}
