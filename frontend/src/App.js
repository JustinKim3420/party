import {Routes, Route} from 'react-router-dom'
import  Homepage from './components/Homepage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App dark">
      <Navbar/>
      <Routes>
        <Route path='/homepage' element={<Homepage />}/>
        <Route path='/' element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
