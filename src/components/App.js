import '../styles/App.css';
import TestComponents from './test';
import Card from './card';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {TestComponents()}
      </header>
    </div>
  );
}



export default App;
