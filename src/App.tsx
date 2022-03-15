import BarraLateral from './components/barra-lateral';
import { useSelectPage } from './context/SelectPage';
import Sobre from './pages/sobre';
import Tarefas from './pages/tarefas';
import './styles.css';

function App() {
  const {page} = useSelectPage();
  
  return (
    <div className='tela'>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </label>

      <label htmlFor="check" className="over">
        <div>
        </div>
      </label>
      <BarraLateral />
      {page === 0? 
          <Tarefas />:
          <Sobre />}
            
    </div>
  );
}

export default App;
