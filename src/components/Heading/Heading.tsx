import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'lg' | 'xl' | '2xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Heading ({children, className, asChild, size='lg'}: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    return(
        <Comp className={clsx(
            'font-sans font-bold text-gray-100',
            {
                'text-lg': size === 'lg',
                'text-xl': size === 'xl',
                'text-2xl': size === '2xl',
            },
            className
            )}>
               {children}
        </Comp>
    )
}