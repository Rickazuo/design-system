import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?:Boolean
}

export function Button({ children, asChild, className, ...props}: ButtonProps) {
    const Comp = asChild? Slot : 'button'

    return (
        <Comp
        className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold font text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
            className,
        )}
        {...props}
        >
        {children}
        </Comp>
    )
}