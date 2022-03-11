import React,{useState,useContext, useCallback} from 'react';
import {myContext} from "../context/context";
import "./HomePage.scss";

const HomePage = () => {
  const [search,setSearch] = useState('');

  const {fetchHomePageMeals,meals} = useContext(myContext);

  const handleonClick = useCallback(()=>{
    fetchHomePageMeals(search);
  },[search])

  return (
    <div className='home'>
        <div className="home-search">
        {/* www.themealdb.com/api/json/v1/1/randomselection.php   */}
          <input type="text" placeholder='Type a meal name...' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <button onClick={handleonClick}>Search Meal</button>
        </div> 
        <div className="home-meals-grid">
        {meals? (
          meals.map((meal) => (
            <div className="home-meal" key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#" />
              <h4>{meal.strMeal}</h4>
            </div>
          ))
        ) : (
          <h2>No meals found! Try another word...</h2>
        )}
        </div>
    </div>
  )
}

export default HomePage