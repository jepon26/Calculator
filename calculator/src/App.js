
import './App.css';
import calculatorLogo from './img/calculator.png'
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className='calculator-logo-container'>
      <img 
      src={calculatorLogo}
      className='calculator-logo'
      alt='Calculator Logo'
      />
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Button>1</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>           
      </div>
    </div>
  );
}

export default App;
