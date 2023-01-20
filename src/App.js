import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditIndvKKSTData from './components/EditKKSTData'
import IndvKKSTData from './components/IndvKKSTData'
import MultiKKSTData from './components/MultiKKSTData'

// function clickMe() {
//   alert('Congrats on helping people understand modern "hip/slang" phrases!')
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MultiKKSTData />} />
          <Route path='/:id' element={<IndvKKSTData />} />
          <Route path='/:id/edit' element={<EditIndvKKSTData />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
