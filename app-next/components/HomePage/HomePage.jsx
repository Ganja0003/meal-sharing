"use client";
import MealsList from "../MealsList/MealsList";
import MealButton from "../MealsList/MealButton";
import banner from '../../assets/banner.png'



// Feel free to replace the content of this component with your own
function HomePage() {
  return(
    <>

    <img src={banner.src} alt="banner" className="banner"/>
    <MealsList slice={true}/>
    <MealButton text='See more meals' route='/meals'/>
    
    </>
  );
  
}

export default HomePage;