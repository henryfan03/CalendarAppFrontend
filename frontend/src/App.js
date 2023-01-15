import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Todo from './pages/Todo';
import Header from './components/Header';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
     <Routes>
      <Route path='/' element={<Todo />}/>
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
