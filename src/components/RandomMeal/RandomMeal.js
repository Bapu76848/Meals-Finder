import React,{useEffect,useContext, useState} from 'react';
// import { myContext } from '../context/context';
import axios from 'axios';
import "./RandomMeal.scss"

const RandomMeal = () => {
  const [randomMeal,setRandomMeal] = useState();
  const fetchRandomMeal = ()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res)=>{
      setRandomMeal(res.data.meals)
    })
}
  useEffect(() => {
    fetchRandomMeal();
  },[]);
  return (
    <div className="random">
      {randomMeal && randomMeal.map((meal) => {
        return (<div key={meal.idMeal} className="random-grid">
          <div className="random-grid-controls">
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={()=>fetchRandomMeal()}> Generate Another Meal</button>
          </div>

          <div className="random-grid-instructions">
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
        )
      })
      }
    </div>
  );
};

export default RandomMeal;