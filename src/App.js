import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';

function App() {
  return(
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route exact path='/categories' element={<Categories />}/>
          <Route exact path='/random' element={<RandomMeal />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
