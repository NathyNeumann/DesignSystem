import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
    title: 'components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum',
    },
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const XSmall: StoryObj<TextProps> = {
    args:{
        size: 'xs',
    }
}
export const Medium: StoryObj<TextProps> = {
    args: {
        size: 'md',
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Teste</p>
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