/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as RUSwitch from '@radix-ui/react-switch';
import classNames from 'classnames';
import { HTMLProps, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  labelPosition?: 'right' | 'left';
  labelClass?: HTMLProps<HTMLElement>["className"];
};

export function Switch(props: Props) {
  return (
    <div
      className='flex items-center'
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {props.label && props.labelPosition === 'left' && (
        <label
          className={classNames(
            `text-white text-[15px] leading-none pr-[15px] ${
              props.labelClass || ''
            }`
          )}
          htmlFor='airplane-mode'
        >
          {props.label}
        </label>
      )}
      <RUSwitch.Root
        className='w-[35px] h-[15px] bg-white bg-opacity-25 rounded-full'
        id='airplane-mode'
        // @ts-ignore
        style={{ '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' }}
      >
        <RUSwitch.Thumb className='block w-[23px] -mt-1 h-[23px] bg-white rounded-full transition-transform duration-100 -translate-x-1.5 will-change-transform data-[state=checked]:translate-x-[19px]' />
      </RUSwitch.Root>
      {props.label && props.labelPosition !== 'right' && (
        <label
          className={classNames(
            `text-white text-[15px] leading-none pr-[15px] ${
              props.labelClass || ''
            }`
          )}
          htmlFor='airplane-mode'
        >
          {props.label}
        </label>
      )}
    </div>
  );
}
