import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Todo from './pages/Todo';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
     <Routes>
      <Route path='/' element={<Todo />}/>
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
