import {CDN_URL} from "../utils/constants";

const FoodCards = (props) =>{
    const{resData}=props;
    return(
      
        <div className="res-cards">
            
         <img className="food-image" src={CDN_URL+resData.info.cloudinaryImageId} alt="no"  />
            
         <h3>{resData.info.name}</h3>
         <h4>{resData.info.cuisines.join(", ")}</h4>
         <h4>{resData.info.sla.deliveryTime}</h4>
         <h4>{resData.info.avgRating}</h4>
        </div>
       
    );
};
export default FoodCards;