import { IMAGE_URL } from "../utils/constants.js"

const RestaurantCard = ({restaurant}) => {
    return (
        <div className="res-card">
            <img className="food-img" alt="food-img" src={IMAGE_URL+restaurant.info.cloudinaryImageId}></img>
            <div className="food-desc">
                <h3 style={{margin: "2px 0", fontFamily: "sans-serif", color: "InfoText" }}>{restaurant.info.name}</h3>
                <h4 style={{margin:"5px 0"}}>{restaurant.info.cuisines.join(", ")} - {restaurant.info.costForTwo}</h4>
                <span>This restaurant is rated <strong>{restaurant.info.avgRating}</strong> - <strong>{restaurant.info.totalRatingsString}</strong> Votes</span>
                <p>{restaurant.info.locality}, {restaurant.info.areaName}</p>
            </div>
        </div>
    )
}

export default RestaurantCard