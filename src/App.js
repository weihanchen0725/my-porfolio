import logo from './logo.svg';
import './App.css';
import {Container} from './components/styles/container.styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          Learn React with Material UI and Styled-Componets
        </Container>
      </header>
    </div>
  );
}

export default App;
