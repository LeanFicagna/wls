import { Meta } from '@storybook/react';

import ListaTarefas from './ListaTarefas'; 

import './../components/lista-tarefas/styles.css'
import './styles.css'
import './../styles.css'

const meta: Meta = {
    title: 'Lista itens',
}

export default meta;

export const ListarTarefas = () => (<ListaTarefas />);

export const BotaoNovaTarefa = () => (
    <div className='new-task' style={{"width": "150px"}}>
        <button>
            <span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white"/>
                </svg>
            </span>
            <h4>Nova tarefa</h4>
        </button>
    </div>
);
