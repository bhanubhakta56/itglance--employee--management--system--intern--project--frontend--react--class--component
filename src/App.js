// import logo from './logo.svg';
import './App.css';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Body from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Body></Body>
    </div>
    </BrowserRouter>
  );
}

export default App;
