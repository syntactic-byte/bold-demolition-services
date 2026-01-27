import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <div className="w-10 h-10 bg-primary flex items-center justify-center">
        <span className="font-display text-2xl text-primary-foreground font-bold">T</span>
      </div>
      <span className="font-display text-2xl tracking-wider text-foreground">
        TITAN<span className="text-primary">BREKERS</span>
      </span>
    </div>
  )
}
