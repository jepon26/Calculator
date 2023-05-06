
import './App.css';
import calculatorLogo from './img/calculator.png'
import Button from './components/Button';
import Screen from './components/Screen';

function App() {

const manageClick = () => {
  console.log('Click');
}


const restartCounter = () => {
  console.log('Restart');
}

  return (
    <div className="App">
      <div className='calculator-logo-container'>
      <img 
      src={calculatorLogo}
      className='calculator-logo'
      alt='Calculator Logo' />
      </div>
      <div className='calculator-container'>
        <Screen/>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>

        </div>
        <Button
        text='Click'
        isClickButton={true}
        manageClick={manageClick} />
        <Button
        text='Restart'
        isClickButton={false}
        manageClick={restartCounter}
        />



            
      </div>
    </div>
  );
}

export default App;
