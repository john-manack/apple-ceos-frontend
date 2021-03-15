import CeoList from './components/CeoList';
import AddCeo from './components/AddCeo'
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [reload, setReload] = useState(false);

  const handleReload = (status) => {
    setReload(status);
  }

  return (
    <div className="App">
      <h1>Apple CEOs - React Frontend</h1>
      <AddCeo handleReload={handleReload} />
      <Router>
        <CeoList reload={reload}/>
      </Router>
    </div>
  );
}

export default App;
