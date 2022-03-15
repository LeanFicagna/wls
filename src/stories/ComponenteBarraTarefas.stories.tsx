import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import IBotao from '../components/barra-lateral/botao';
import IBuscaTarefas from '../components/busca-tarefas';
import IBarraLateralDiv from './BarraLateralDiv';
import IUsuario from '../components/barra-lateral/usuario'

import './../components/busca-tarefas/styles.css';
import './../components/barra-lateral/styles.css';
import './styles.css';

const meta1: Meta = {
    title: 'Componentes Barra de Tarefas',
}

export default meta1;

export const BarraDeBusca = () => (<IBuscaTarefas />);

export const Container = () => (<IBarraLateralDiv />);

export interface Props {
    numberPage: number,
    className: String,
    children: React.ReactNode
}

const Template: ComponentStory<typeof IBotao> = 
        ({numberPage, className, children}: Props) => 
            (<IBotao numberPage={numberPage} className={className}>
                {children}
            </IBotao>);

export const Botao = Template.bind({});

Botao.args = {
    numberPage: 0,
    className: 'button item',
    children: "Botão"
};

export const BotaoSelecionado = Template.bind({});

BotaoSelecionado.args = {
    numberPage: 0,
    className: 'button item select',
    children: "Botão"
};

export const ConteinerUsuario = () => (<IUsuario className={'usuario'} />);