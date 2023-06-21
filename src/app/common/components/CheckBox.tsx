import * as RUCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

interface Props {
  label?: string;
}

export function Checkbox(props: Props) {
  return (
    <div className='flex items-center'>
      <RUCheckbox.Root
        className='bg-white border-2 bg-opacity-5 border-light-grey rounded-md w-6 h-6'
        id='c1'
      >
        <RUCheckbox.Indicator className='text-violet11'>
          <CheckIcon color='white' />
        </RUCheckbox.Indicator>
      </RUCheckbox.Root>
      {props.label && (
        <label
          className='pl-[15px] text-xs font-bold tracking-wide uppercase leading-none text-white'
          htmlFor='c1'
        >
          {props.label}
        </label>
      )}
    </div>
  );
}
