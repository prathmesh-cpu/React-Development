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
        console.log("Hello", data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        console.log(data?.data);
        setResInfo(data?.data);
    }

    if (resInfo === null) return <ShimmerMenu />
    const { name, cuisines } = resInfo?.cards[2]?.card?.card?.info;
    if (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories === undefined) {
        var { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    } else {
        var { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0];
    }

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h2>Menu</h2>
            {
                itemCards.map((item) => (
                    <div key={item?.card?.info?.id}>
                        <li>
                            {item?.card?.info?.name} - ₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                        </li>
                    </div>
                ))
            }
        </div>
    )
}

export default RestaurantMenu;