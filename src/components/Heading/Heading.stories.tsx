import {Meta, StoryObj} from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
    },
    argTypes: {
        size: {
            options: ['lg', 'xl', '2xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const XLarge: StoryObj<HeadingProps> = {
    args:{
        size: 'xl',
    }
}
export const XXLarge: StoryObj<HeadingProps> = {
    args: {
        size: '2xl',
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}