import classNames from 'classnames';

interface Props {
  label: string;
  className?: string;
  as?: React.ElementType;
  variant?: 'contained' | 'outlined'
}

enum variants {
  contained = 'text-bright-pink bg-light-grey',
  outlined = 'border-2 text-light-grey bg-button-outlined'
}

export function Button({ variant = 'contained', as: Component = 'button', label, className: cls, ...props}: Props) {


  const style: string = variant === 'outlined' ? variants.outlined : variants.contained

  return <Component className={classNames(`${style} pt-3 shadow-button pb-3 rounded-md leading-7 font-medium text-sm min-w-[320px] ${cls|| ''}`)} {...props}>{label}</Component>;
}
