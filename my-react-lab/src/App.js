import './App.css';
import Counter from './components/counter'; 
import Calculator from './components/calculator';
import Form from './components/form';
import Shop from './components/shop';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <Counter/>
      <Form/>
      <Shop/>
    </div>
  );
}

export default App;