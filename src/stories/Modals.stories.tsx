import { Meta } from '@storybook/react';

import ModalCriar from './ModalCriar';
import ModalEditar from './ModalEditar';
import Progresso from './Progresso';

import '../components/modal/styles.css';
import '../components/modal/editar/styles.css';
import { useState } from '@storybook/addons';

const meta: Meta = {
    title: 'Modals',
}

export default meta;

export const CriarTarefa = () => (<ModalCriar />);


export const EditarTarefas = () => {
    const [status1,setStatus1] = useState(0);
    return (<ModalEditar status={status1} setStatus={setStatus1} />)
};

export const BotaoDeProgresso = () => {
    const [status,setStatus] = useState(0);

    return (<Progresso status={status} setStatus={setStatus} />);
}