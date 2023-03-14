import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/features/Header/Header';
import {Hero} from './components/features/Hero/Hero'
import { Products } from './components/features/Products/Products';


function App() {
  return (
    <div className="App bg-dark vh-100">
     <Header>  </Header>
    <Hero></Hero>
    <Products></Products>
    </div>
  );
}

export default App;
