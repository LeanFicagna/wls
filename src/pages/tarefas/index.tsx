import BuscaTarefas from '../../components/busca-tarefas';
import ListaTarefas from '../../components/lista-tarefas';
import './styles.css';

export default function Tarefas() {
  return (
    <div className="container">
      <div className='tarefas'>
        <BuscaTarefas />
        <ListaTarefas />
      </div>
    </div>
  );
}
