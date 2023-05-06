
import './App.css';
import calculatorLogo from './img/calculator.png'
import Button from './components/Button';

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
      alt='Calculator Logo'
      />
      </div>
      <div className='main-container'>
        <Button
        text='Click'
        isClickButton={true}
        manageClick={manageClick}
        />
        <Button
        text='Restart'
        isClickButton={false}
        manageClick={restartCounter}
        />



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
