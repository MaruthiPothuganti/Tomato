import './App.css';
import {Routes, Route} from 'react-router-dom'
import { LandingPage } from './Pages';
import {Login, SignUp} from './Components'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='/' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
