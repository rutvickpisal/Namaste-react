import RestaurantCard from "./RestaurantCard"
import Data from "../../data.json"
import { useState } from "react";
let DataArr = Data.sections.SECTION_SEARCH_RESULT;
const Body = () => {

    const [ObjData, setData] = useState(DataArr);
    const [searchText, setSearchText] = useState("");
    const [filterForTopRes, setFilterForTopRes] = useState(true);

    function filterTopRestaurants() {
        if(filterForTopRes) {
            setData(DataArr.filter((obj) => {
                return obj.info.rating.aggregate_rating > 3.8
            }))
        }else{
            setData(DataArr)
        }
        setFilterForTopRes(!filterForTopRes)
    }
    
    function searchRestaurants(event) {
        setSearchText(event.target.value)
        setData(ObjData.filter((obj) => {
            return obj.info.name.includes(searchText)
        }))
    }

    return (
        <>
            <div className="search">
                <button className="filter-btn" onClick={() => filterTopRestaurants()}>{!filterForTopRes ? 'See all restaurants' : 'See Top rated restaurants'}</button>
            </div>
            <div>
                <input type="text" className="search-bar" onChange={(e) => searchRestaurants(e)}></input>
                {/* <button onClick={() => searchRestaurants()}>Search</button> */}
            </div>
            <div className="res-container">
                {
                    ObjData.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.resId} restaurant={restaurant}/>
                    })
                }
            </div>
        </>
    )
}

export default Body