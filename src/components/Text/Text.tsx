import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'xs' | 'sm' | 'md';
    children: ReactNode;
    asChild?: boolean;
    textColor?: number;
}

export function Text ({textColor=100 , children, asChild, size='sm'}: TextProps) {
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
            }
            )}>
               {children}
        </Comp>
    )
}