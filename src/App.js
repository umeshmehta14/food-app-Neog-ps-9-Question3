import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Header from './Components/Header';
import { useData } from './Contexts/DataProvider';
import Error from './Pages/Error';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import WhishList from './Pages/WhishList';

function App() {
  const {loading, error} = useData();
  return (
    <>
    {/* <img className='loading-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMTEwNDU0LTViMzMtNDQxNi1iZjliLTcyOTkyYzdjYjU2ZlwvZDYwZWIxdi03OTIxMjYyNC1lODQyLTRlNTUtOGQ1OC00YWM3NTE0Y2E4ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9LDpLmLlbA507H7fKa8aEDxFr8k3SlwCGC1zuJ13d1w" alt="Loading..."/> */}
      {loading ?<div className='loading-box'> <img className='loading-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMTEwNDU0LTViMzMtNDQxNi1iZjliLTcyOTkyYzdjYjU2ZlwvZDYwZWIxdi03OTIxMjYyNC1lODQyLTRlNTUtOGQ1OC00YWM3NTE0Y2E4ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9LDpLmLlbA507H7fKa8aEDxFr8k3SlwCGC1zuJ13d1w" alt="Loading..."/></div> : <> { !error && <Header/>}
      <Routes>
        {error ? <Route path="/" element={<Error/>}/>:<Route path="/" element={<Home/>}/>   }
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<WhishList/>}/>
      </Routes></>}
    </>
  );
}

export default App;