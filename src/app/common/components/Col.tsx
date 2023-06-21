import classNames from 'classnames'
import React from 'react'

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Col(props: Props) {
  return (
    <div className={classNames(`w-[603px] mt-0 m-auto ${props.className}`)}>{props.children}</div>
  )
}
