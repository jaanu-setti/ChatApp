
import './App.css';
import Initial from './components/initial';
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Initial/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
