import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
    return (<div className='restaurantCard'>
        <img src={CDN_URL + resData.info.cloudinaryImageId} />
        <h3>{name}</h3>
        <p>{cuisines.join(" · ")}</p>
        <p className='foodStat'>
            <span style={(avgRating < 4.0 || avgRating == null) ? {backgroundColor: "#ef0000"} : {backgroundColor: "#00a065"}}>★ {avgRating}</span>
            · <span>{sla.lastMileTravelString}</span>
            · <span>{sla.slaString}</span>
        </p>
        <p className='price'>{costForTwo}</p>
    </div>)
};

export default RestaurantCard;