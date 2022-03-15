import App from './App';
import SelectPageContextProvider from './context/SelectPage';
import './styles.css';

function Providers() {
  return (
      <SelectPageContextProvider>
          <App/>
      </SelectPageContextProvider>
  );
}

export default Providers;
