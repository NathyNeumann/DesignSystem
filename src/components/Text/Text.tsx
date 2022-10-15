import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'xs' | 'sm' | 'md';
    children: ReactNode;
    asChild?: boolean;
    textColor?: number;
    className?: string;
}

export function Text ({children, className, asChild, size='sm', textColor=100}: TextProps) {
    const Comp = asChild ? Slot : 'span';
    return(
        <Comp className={clsx(
            'font-sans',
            {
                'text-xs': size === 'xs',
                'text-sm': size === 'sm',
                'text-md': size === 'md'
            },
            {
                'text-gray-100': textColor === 100,
                'text-gray-200': textColor === 200,
                'text-gray-400': textColor === 400,
                'text-gray-800': textColor === 800,
                'text-gray-900': textColor === 900
            }, 
            className,
            )}>
               {children}
        </Comp>
    )
}