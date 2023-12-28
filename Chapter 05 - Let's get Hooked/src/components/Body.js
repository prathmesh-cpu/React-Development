import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/mockData";

const Body = () => {

    // Local State Variable - with superpowers given by React.
    const [listOfRestaurants, setListOfRestaurants] = useState(restoList);

    // Normal JS variable -
    // let listOfRestaurants = []

    return (
        <div className='body'>
            <div className='searchContainer'>
                <div>
                    <label htmlFor='search'><i className="fa-solid fa-magnifying-glass"></i></label>
                    <input type='text' id='search' autoComplete='off' placeholder='Search for restaurants and food' />
                </div>
            </div>

            <div className="searchContainer">
                <button className="filterBtn" onClick={() => {
                    const fileredList = listOfRestaurants.filter((resto) => {
                        return resto.info.avgRating > 4.0;
                    });
                    setListOfRestaurants(fileredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className='restaurantContainer'>
                {
                    listOfRestaurants.map((restaurantItem) => (
                        <a target='_blank' href={restaurantItem.cta.link} key={restaurantItem.info.id}>
                            <RestaurantCard resData={restaurantItem} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;