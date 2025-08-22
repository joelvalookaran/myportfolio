import './App.css';
import Drawer from './components/Drawer';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0e1627' }}>
      <Drawer />
      <main style={{ flex: 1, padding: '24px', color: '#e6f0ff' }}>
        <Aboutus />
      </main>
    </div>
  );
}

export default App;
