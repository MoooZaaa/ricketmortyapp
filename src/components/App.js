import '../styles/App.css';
import TestComponents from './test';
import card from './card';
  




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponents/>
        {card()}
      </header>
    </div>
  );
}



export default App;
