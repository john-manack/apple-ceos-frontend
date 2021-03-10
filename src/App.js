import CeoList from './components/CeoList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Apple CEOs - React Frontend</h1>
      <Router>
        <CeoList />
      </Router>
    </div>
  );
}

export default App;
