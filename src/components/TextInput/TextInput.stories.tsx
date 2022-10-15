import {Meta, StoryObj} from '@storybook/react'
import { EnvelopeSimple } from 'phosphor-react';
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
    title: 'components/TextInput',
    component: TextInput.Root,
    args: { 
       children: [
            <TextInput.Icon><EnvelopeSimple /></TextInput.Icon>,
            <TextInput.Input placeholder='add your e-mail address'/>
       ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WithOutIcon: StoryObj<TextInputRootProps> = {
    args: { 
        children: (
             <TextInput.Input placeholder='add your e-mail address'/>
        ),
     },
}
