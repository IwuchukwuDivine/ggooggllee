
import './index.css';
import Navbar from './components/navbar';
import AppRoutes from './components/Routes';




function App() {

  return (
    <div className=' bg-white dark:bg-bg-dark min-h-screen'>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
