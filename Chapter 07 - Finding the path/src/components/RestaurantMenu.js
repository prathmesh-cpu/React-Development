import { useState, useEffect } from "react";
import { RES_INFO_API_URL } from "../utils/constant";
import { ShimmerMenu } from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        let data = await fetch(RES_INFO_API_URL + resId);
        data = await data.json();
        console.log(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        setResInfo(data?.data);
    }

    if (resInfo === null) return <ShimmerMenu />

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {
                itemCards.map((item) => (
                    <div key={item?.card?.info?.id}>
                        <li>{item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}</li>
                    </div>
                ))
            }
        </div>
    )
}

export default RestaurantMenu;