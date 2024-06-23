import { Link, Route, Routes } from 'react-router-dom';
import AutoComplete from './pages/AutoComplete';
import InfiniteScroll from './pages/InfiniteScroll';

function App() {
	return (
<>
	<nav>
        <div >
          <Link to="/AutoComplete">AutoComplete</Link>
        </div>
		<div >
          <Link to="/InfiniteScroll">InfiniteScroll</Link>
        </div>
      </nav>
      <Routes>
	  <Route path='/AutoComplete' element={<AutoComplete/>} />
	  <Route path='/InfiniteScroll' element={<InfiniteScroll/>} />
      </Routes>
</>
	);
}

export default App;