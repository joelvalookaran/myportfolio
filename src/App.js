import './App.css';
import Drawer from './components/Drawer';

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0e1627' }}>
      <Drawer />
      <main style={{ flex: 1, padding: '24px', color: '#e6f0ff' }}>
        <h2 style={{ marginTop: 0 }}>Welcome</h2>
        <p>Replace this area with your page content.</p>
      </main>
    </div>
  );
}

export default App;
