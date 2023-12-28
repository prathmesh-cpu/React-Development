import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constant";
import ShimmerCard from "./Shimmer";

const filterData = (searchText, listOfRestaurants) => {
    const filteredList = listOfRestaurants.filter((restaurant) => {
        return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return filteredList;
}

const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let data = await fetch(API_URL);

        data = await data.json();

        console.log(data);
        let liveData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(liveData);
        setFilteredRestaurant(liveData);
    }

    return (
        <div className='body'>
            <div className='searchContainer'>
                <div>
                    <label htmlFor='search'><i className="fa-solid fa-magnifying-glass"></i></label>
                    <input type='text' id='search' autoComplete='off' placeholder='Search for restaurants and food' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} onKeyDown={(e) => {
                        if (e.key == 'Enter') {
                            const data = filterData(searchText, listOfRestaurants);
                            setFilteredRestaurant(data);
                        }
                    }} />
                </div>
            </div>

            <div className="searchContainer">
                <button className="filterBtn" onClick={() => {
                    const fileredList = listOfRestaurants.filter((resto) => {
                        return resto.info.avgRating > 4.0;
                    });
                    setFilteredRestaurant(fileredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>

            {
                (listOfRestaurants.length === 0) ?
                    <div className="cardContainer">
                        <ShimmerCard />
                        <ShimmerCard />
                        <ShimmerCard />
                        <ShimmerCard />
                        <ShimmerCard />
                    </div>
                    :
                    <div className='restaurantContainer'>
                        {
                            filteredRestaurant.map((restaurantItem) => (
                                <a target='_blank' href={restaurantItem.cta.link} key={restaurantItem.info.id}>
                                    <RestaurantCard resData={restaurantItem} />
                                </a>
                            ))
                        }
                    </div>
            }
        </div>
    )
};

export default Body;