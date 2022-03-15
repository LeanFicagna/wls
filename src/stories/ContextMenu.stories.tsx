import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import ContextMenu from './ContextMenu';

import './../components/lista-tarefas/styles.css'

const meta: Meta = {
    title: 'Menu de Contexto',
}

export default meta;

export const MenuDeContexto = () => (<div><ContextMenu /></div>);
