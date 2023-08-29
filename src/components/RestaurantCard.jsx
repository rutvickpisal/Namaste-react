const RestaurantCard = ({restaurant}) => {
    return (
        <div className="res-card">
            <img className="food-img" alt="food-img" src={restaurant.info.image.url}></img>
            <div className="food-desc">
                <h3>{restaurant.info.name}</h3>
                <h4 style={{margin:"5px 0"}}>{restaurant.info.cuisine[0].name}</h4>
                <span>This restaurant is rated <strong>{restaurant.info.rating.aggregate_rating}</strong> - <strong>{restaurant.info.rating.votes}</strong> Votes</span>
                <p>{restaurant.info.locality.name}</p>
            </div>
        </div>
    )
}

export default RestaurantCard