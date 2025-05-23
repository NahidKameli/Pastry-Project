import React from 'react';
import Carts from './Cart/Carts';
import Favorites from './Popular/Favorites';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar/NavBar';


function App() {
    const [like, setLike] = React.useState([]);
    const [shop, setShop] = React.useState([]);
    const [likeCount, setLikeCount] = React.useState(0);
  return (
    // <Carts/>
    <Router>
      <NavBar likeCount={likeCount} setLikeCount={setLikeCount}/>
      <Routes>
        <Route path="/" element={<Homepage setLike={setLike} like={like} shop={shop} setShop={setShop}/>}/>
        <Route path="/Cart" element={<Carts shop={shop}/>}/>
        <Route path="/Favorites" element={<Favorites like={like}/>}/>
      </Routes>
    </Router>
  // <Homepage/>
  )
}

export default App