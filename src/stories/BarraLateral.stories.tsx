import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import BarraLateral from '../components/barra-lateral';
import './../components/barra-lateral/styles.css';
import './styles.css';

const meta: Meta = {
    title: 'BarraLateral',
    component: BarraLateral
}

export interface Props {
    numberPage: number,
    className: String,
    children: React.ReactNode
}

export default meta;

const Template: ComponentStory<typeof BarraLateral> = 
        () => 
            (<BarraLateral />);

export const Unica = Template.bind({});
