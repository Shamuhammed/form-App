import logo from './logo.svg';
import './App.css';
import './scss/main.css'
import Form from './components/form/form';
import { BrowserRouter } from 'react-router-dom';
import FormContainer from './components/form/formContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FormContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
