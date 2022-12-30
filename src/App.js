import Button, { FancyButton } from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button>Default</Button>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <FancyButton>Default</FancyButton>
      <FancyButton primary>Primary</FancyButton>
      <FancyButton secondary>Secondary</FancyButton>
    </div>
  );
}

export default App;
