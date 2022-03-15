import { useSelectPage } from '../../context/SelectPage';
import Botao from './botao';
import './styles.css';
import Usuario from './usuario';

export default function BarraLateral() {  
  const {page, setPage} = useSelectPage();

  return (
    <div className='barra-lateral items-center'>
      <Usuario className='item usuario'/>
      <div className='line-div'/>
      <Botao className={`button item ${page === 0? 'select': ''}`} numberPage={0}>
        <>
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2H11.82C11.4 0.84 10.3 0 9 0C7.7 0 6.6 0.84 6.18 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM4 7H6V11H5V8H4V7ZM7 16V17H4V16.08L6 14H4V13H6.25C6.66 13 7 13.34 7 13.75C7 13.95 6.92 14.14 6.79 14.27L5.12 16H7ZM8 3C8 2.45 8.45 2 9 2C9.55 2 10 2.45 10 3C10 3.55 9.55 4 9 4C8.45 4 8 3.55 8 3ZM14 16H9V14H14V16ZM14 10H9V8H14V10Z" fill="white"/>
          </svg>
          <div>Tarefas</div>
        </>
      </Botao>
      <Botao className={`button item ${page === 1? 'select': ''}`} numberPage={1}>
        <>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7H9V5H11V7ZM11 15H9V9H11V15ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z" fill="white"/>
          </svg>
          <div>Sobre</div>
        </>
      </Botao>
    </div>
  );
}
