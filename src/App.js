import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/features/Header/Header';
import {Hero} from './components/features/Hero/Hero'
import { Products } from './components/features/Products/Products';

function App() {

  return (
    <div className="App bg-dark vh-100">
     <Header /> 
    <Hero/>
    <Products/>
    </div>
  );
}

export default App;
