import './App.css';
import Mensaje from './Mensaje';

const Description = () => {
  return <p>
    Esta es la app del curso FullStack BootCamp
  </p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' msg='Estamos trabajando' />
      <Mensaje color='green' msg='En un curso' />
      <Mensaje color='brown' msg='De React' />
      <Description />
    </div>
  );
}

export default App;
