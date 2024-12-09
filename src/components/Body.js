import FoodCards from "./FoodCards";
import Shimmer from "./Shimmer";
import {useState,useEffect} from "react";


const Body = () =>{
    const[listOfRestaurants,setlistOfRestaurants]=useState([]);

    useEffect(() => {fetchData();},
[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listOfRestaurants.length===0)
        {
            return <Shimmer />;
        }
    
        


    return(
      
   
    <div className="body">
        <div className="filter-bar">
         <button onClick={() =>{
            const filteredList=listOfRestaurants.filter(
               (res)=>res.info.avgRating>4.3
            );
            setlistOfRestaurants(filteredList);
         }}>Top Rated Restaurants</button>
        </div>
        <div className="food-container">
            {listOfRestaurants.map((restaurants) =>(
               <FoodCards key={restaurants.info} resData={restaurants} />
            ))}
        </div>

        
    </div>)
};
        
    
export default Body;