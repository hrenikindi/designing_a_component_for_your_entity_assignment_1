import './App.css';
import Usercard from './components/usercard.jsx';

function App() {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
        <Usercard/>
    </div>
  );
}

export default App;
