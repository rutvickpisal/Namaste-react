import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";
// import Data from "../../data.json"
import { useState, useEffect } from "react";
// let DataArr = Data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
const Body = () => {

    const [ObjData, setObjData] = useState([]);
    const [filteredArr, setfilteredArr] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterForTopRes, setFilterForTopRes] = useState(true);

    useEffect(() => {
        fetchData();
    },[])

    async function fetchData() {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        let dataArr = await json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setfilteredArr(dataArr);
        setObjData(dataArr);
    }

    function filterTopRestaurants() {
        if(filterForTopRes) {
            setfilteredArr(ObjData.filter((obj) => {
                return obj.info.avgRating > 4.2
            }))
        }
        setFilterForTopRes(!filterForTopRes)
    }
    
    console.log(searchText.length, ObjData, filteredArr);
    
    function searchRestaurants(event) {
        setSearchText(event.target.value)
        setfilteredArr(ObjData.filter((item) => { return item.info.name.toLowerCase().includes(searchText.toLowerCase())}))
        if(searchText.length < 2) {
            setfilteredArr(ObjData)
        }
    }
    return ObjData.length === 0 ? <><div className="search">
    <button className="filter-btn" onClick={() => filterTopRestaurants()}>{!filterForTopRes ? 'See all restaurants' : 'See Top rated restaurants'}</button>
</div>
<div>
    <input type="text" className="search-bar" onChange={(e) => searchRestaurants(e)}></input>
</div><Shimmer></Shimmer></> : 
    (
        <>
            <div className="search">
                <button className="filter-btn" onClick={() => filterTopRestaurants()}>{!filterForTopRes ? 'See all restaurants' : 'See Top rated restaurants'}</button>
            </div>
            <div>
                <input type="text" className="search-bar" onChange={(e) => searchRestaurants(e)}></input>
            </div>
            <div className="res-container">
                {
                    filteredArr.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>
                    })
                }
            </div>
        </>
    )
}

export default Body