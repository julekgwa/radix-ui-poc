import * as Separator from '@radix-ui/react-separator';
import classNames from 'classnames';

interface Props {
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

export function Divider({orientation = 'horizontal', className: cls}: Props) {
  return (
    <Separator.Root
    className={classNames(`bg-light-grey data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px] ${cls||''}`)}
    decorative
    orientation={orientation}
  />
  )
}
