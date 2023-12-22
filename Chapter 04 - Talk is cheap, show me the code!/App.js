import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from "./assets/swigzo.svg";

/**
 * 
 * Food Delivery App Layout --------------------------------
 * 
 * Header -
 *      - Logo
 *      - Navigation Items
 *          - Home
 *          - Menu
 *          - About
 *          - Contact
 * 
 * Body -
 *      - Search Foods
 *      - RestaurantContainer
 *          - RestaurantCard
 *              - ImageOfFood
 *              - FoodName
 *              - FoodType
 *              - Rating
 *              - TimeToDelivery
 *              - Price
 * 
 * Footer -
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contact
 */

let restoList = [

    {
        "info": {
            "id": "14548",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Paud Road",
            "areaName": "Kothrud",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.2,
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5.8,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "5.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-paud-road-kothrud-pune-14548",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "38498",
            "name": "Sufi's",
            "cloudinaryImageId": "815ed38d075a7d049ec8876754025eeb",
            "locality": "Salunke Vihar Road",
            "areaName": "Wanowrie",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Chinese",
                "Tandoor",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "196483",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 7,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "7.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹749",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sufis-salunke-vihar-road-wanowrie-pune-38498",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "238059",
            "name": "Captain Rolls",
            "cloudinaryImageId": "wutp8lfkwsstpninsqwq",
            "locality": "NIBM road ",
            "areaName": "Undri",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Fast Food",
                "Nepalese",
                "North Eastern",
                "Tibetan"
            ],
            "avgRating": 3.8,
            "parentId": "55854",
            "avgRatingString": "3.8",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "41 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "ABOVE ₹600",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-5a98f39e-afa3-4cd6-91c3-08dc9e7d4a46"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/captain-rolls-nibm-road-undri-pune-238059",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "395679",
            "name": "Chinese Bowl Company",
            "cloudinaryImageId": "sx16g758vsvdhh1uslzy",
            "locality": "NIBM road ",
            "areaName": "Undri",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "Fast Food",
                "Asian"
            ],
            "avgRating": 3.7,
            "parentId": "22524",
            "avgRatingString": "3.7",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "37 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "ABOVE ₹700",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-5a98f39e-afa3-4cd6-91c3-08dc9e7d4a46"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-bowl-company-nibm-road-undri-pune-395679",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "355999",
            "name": "Hyderabadi Biryani Express",
            "cloudinaryImageId": "mssc5c6yxi7yhorqzofj",
            "locality": "Baner Pan Club Road",
            "areaName": "Baner",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Biryani"
            ],
            "avgRating": 3.6,
            "parentId": "105161",
            "avgRatingString": "3.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 9.3,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "9.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 07:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hyderabadi-biryani-express-pan-club-road-baner-pune-355999",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "230621",
            "name": "Al Madina Biryani House",
            "cloudinaryImageId": "kupskpqk6pzohh9a5dci",
            "locality": "Azam Campus",
            "areaName": "Camp Area",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "North Indian",
                "Mughlai",
                "Beverages"
            ],
            "avgRating": 3.6,
            "parentId": "21873",
            "avgRatingString": "3.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/al-madina-biryani-house-azam-campus-camp-area-pune-230621",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "223132",
            "name": "Burger Mines",
            "cloudinaryImageId": "bnnhmg7xdq896kcz9p7f",
            "locality": "LIC Colony",
            "areaName": "Kothrud",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Burgers",
                "Fast Food",
                "Lebanese",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "51384",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-mines-lic-colony-kothrud-pune-223132",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "470192",
            "name": "Greens and Breads",
            "cloudinaryImageId": "hchy7gown4d9lenlyd0h",
            "locality": "Paud Road",
            "areaName": "Bavdhan",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Healthy Food",
                "American",
                "Salads",
                "Continental",
                "Grill"
            ],
            "avgRating": 4.1,
            "parentId": "8894",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 7.6,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "7.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "ABOVE ₹700",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/greens-and-breads-paud-road-bavdhan-pune-470192",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "676453",
            "name": "Cheesiano Pizza",
            "cloudinaryImageId": "819c6613ec78c2a8926008a051654fc4",
            "locality": "Camp",
            "areaName": "Camp",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Burgers",
                "Fast Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "59203",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹150",
                "discountTag": "SAVE BIG"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cheesiano-pizza-camp-pune-676453",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "683013",
            "name": "Burgerino",
            "cloudinaryImageId": "4e918a48451e39e32d4eb7a1eb61c182",
            "locality": "Camp",
            "areaName": "Camp",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Burgers",
                "Pastas",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.9,
            "parentId": "422018",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹150",
                "discountTag": "SAVE BIG"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-0cb6f583-2cc2-4a40-b1cd-0472d1c49e04"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burgerino-camp-pune-683013",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "561999",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "xadtoeciwxfly4rdx79i",
            "locality": "Camp",
            "areaName": "Camp",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.7,
            "parentId": "4961",
            "avgRatingString": "3.7",
            "totalRatingsString": "500+",
            "promoted": true,
            "adTrackingId": "cid=9702586~p=1~eid=0000018c-8909-66a2-65b3-26350003014e~srvts=1703106143906~87168",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 03:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹699",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-camp-pune-561999",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "755224",
            "name": "Saucy Subs",
            "cloudinaryImageId": "b1fb868bb4a5fae918104c4915678ca4",
            "locality": "Nehru Memorial Hall",
            "areaName": "Camp",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Burgers",
                "Rolls & Wraps",
                "Fast Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.8,
            "parentId": "445174",
            "avgRatingString": "3.8",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 44,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "44 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹150",
                "discountTag": "SAVE BIG"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/saucy-subs-nehru-memorial-hall-camp-pune-755224",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "34715",
            "name": "Kok Pa Chinese",
            "cloudinaryImageId": "gvvdbegf1guwzww6rsbh",
            "locality": "FC Road",
            "areaName": "Shivaji Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian"
            ],
            "avgRating": 4.2,
            "parentId": "18863",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kok-pa-chinese-fc-road-shivaji-nagar-pune-34715",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "307668",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "cav4arr73zilphdn0xac",
            "locality": "Pushpanjali Appartment",
            "areaName": "Karve Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.6,
            "veg": true,
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=9929308~p=2~eid=0000018c-8909-66a2-65b3-26360003023f~srvts=1703106143906~87168",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 6.1,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "6.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-pushpanjali-appartment-karve-nagar-pune-307668",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "566221",
            "name": "Faasos' Signature Wraps & Rolls",
            "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
            "locality": "Shaniwar Peth FC",
            "areaName": "Shaniwar Peth",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "North Indian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "340366",
            "avgRatingString": "4.2",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 03:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-signature-wraps-and-rolls-fc-shaniwar-peth-pune-566221",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "403219",
            "name": "Hotel Al Zaika",
            "cloudinaryImageId": "l8xwb5plwupygxne6ffl",
            "locality": "Shukrawar Peth",
            "areaName": "Shukrawar Peth",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Mughlai"
            ],
            "avgRating": 3.3,
            "parentId": "97829",
            "avgRatingString": "3.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-al-zaika-shukrawar-peth-pune-403219",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "707913",
            "name": "The Royal Pasta House",
            "cloudinaryImageId": "e174b73e0cd3385c5760f44bb3289c6e",
            "locality": "Shastri Nagar",
            "areaName": "Kothrud",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pastas"
            ],
            "veg": true,
            "parentId": "423221",
            "avgRatingString": "--",
            "promoted": true,
            "adTrackingId": "cid=9922570~p=3~eid=0000018c-8909-66a2-65b3-263700030377~srvts=1703106143906~87168",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 6.5,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "6.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-royal-pasta-house-shastri-nagar-kothrud-pune-707913",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "574987",
            "name": "Mehfil by Behrouz",
            "cloudinaryImageId": "2b579171cefc545ce6479e21c0016798",
            "locality": "Senapati Bapat Road",
            "areaName": "Shaniwar Peth",
            "costForTwo": "₹700 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "344904",
            "avgRatingString": "4.1",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 14,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "14 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mehfil-by-behrouz-senapati-bapat-road-shaniwar-peth-pune-574987",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "263632",
            "name": "Pure Veg Meals by Lunchbox",
            "cloudinaryImageId": "awdiaapk6kyqau0tj5vo",
            "locality": "Shaniwar Peth FC",
            "areaName": "Shaniwar Peth",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "21938",
            "avgRatingString": "4.3",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 0.4,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "0.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "maxDuration": "3000",
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-59143651-f984-41da-bcf6-0a08711809a5"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pure-veg-meals-by-lunchbox-fc-shaniwar-peth-pune-263632",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName"
    },
    {
        "info": {
            "id": "7127",
            "name": "Cheesiano Pizza",
            "cloudinaryImageId": "pskzmnmbz9rwv32ng1bj",
            "locality": "Baner",
            "areaName": "Balewadi",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Burgers",
                "Fast Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.8,
            "parentId": "59203",
            "avgRatingString": "3.8",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 9.1,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "9.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹150",
                "discountTag": "SAVE BIG"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cheesiano-pizza-baner-balewadi-pune-7127",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "2494",
            "name": "RushHrs",
            "cloudinaryImageId": "y5kzxicvbdlhkrbmjllv",
            "locality": "Magarpatta City",
            "areaName": "Magarpatta City",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Fast Food",
                "Healthy Food",
                "Salads",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "791",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 9.5,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "9.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-28 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/rushhrs-magarpatta-city-pune-2494",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "338997",
            "name": "1441 Pizzeria",
            "cloudinaryImageId": "c7fcd9e43f4b995c3cd08d7632b426f0",
            "locality": "Kothrud",
            "areaName": "Kothrud",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Italian",
                "Pizzas",
                "Pastas"
            ],
            "avgRating": 3.9,
            "parentId": "2697",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 04:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/1441-pizzeria-kothrud-pune-338997",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "258140",
            "name": "Kaati Zone Rolls & Wraps",
            "cloudinaryImageId": "lqu1yhlxougwpqbslmfe",
            "locality": "Karve Road",
            "areaName": "Kothrud",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Fast Food",
                "Bengali",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "248306",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-karve-road-kothrud-pune-258140",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "213654",
            "name": "WarmOven Cake & Desserts",
            "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
            "locality": "Karve Road",
            "areaName": "Kothrud",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "9696",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-karve-road-kothrud-pune-213654",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "213655",
            "name": "Indiana Burgers",
            "cloudinaryImageId": "lhlqby3ywjrorvo7w5bg",
            "locality": "Karve Road",
            "areaName": "Kothrud",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Burgers",
                "American",
                "Fast Food",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "5714",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/indiana-burgers-karve-road-kothrud-pune-213655",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "213645",
            "name": "Cupcake Bliss Cake & Desserts",
            "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
            "locality": "Pandurang Colony",
            "areaName": "Erandwane",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "66732",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 5.5,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "5.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-pandurang-colony-erandwane-pune-213645",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "292517",
            "name": "Chai Point",
            "cloudinaryImageId": "ewhrfspfrhqebt5xjawq",
            "locality": "Baner Road",
            "areaName": "Baner",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "South Indian",
                "Punjabi",
                "Chaat",
                "Indian",
                "American",
                "North Indian",
                "Fast Food",
                "Desserts",
                "Cafe",
                "Healthy Food",
                "Home Food"
            ],
            "avgRating": 4.4,
            "parentId": "1607",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 8.8,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "8.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "25% OFF",
                "subHeader": "UPTO ₹125"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chai-point-road-baner-pune-292517",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "14777",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Hadapsar",
            "areaName": "Magarpatta",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.9,
            "parentId": "721",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 40,
                "lastMileTravel": 11.1,
                "serviceability": "SERVICEABLE",
                "slaString": "40 mins",
                "lastMileTravelString": "11.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-hadapsar-magarpatta-pune-14777",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "5400",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Green Valley Road",
            "areaName": "Wanowrie",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "2",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 8.4,
                "serviceability": "SERVICEABLE",
                "slaString": "37 mins",
                "lastMileTravelString": "8.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹899",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-green-valley-road-wanowrie-pune-5400",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "112893",
            "name": "Mad Momos",
            "cloudinaryImageId": "rihwgz3qlick7e92zfhk",
            "locality": "Nibm Indri Road",
            "areaName": "NIBM, Kondhwa",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Tibetan",
                "Nepalese",
                "Beverages",
                "Pizzas",
                "Snacks"
            ],
            "avgRating": 4,
            "parentId": "610",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 9.5,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "9.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-21 06:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mad-momos-nibm-indri-road-nibm-kondhwa-pune-112893",
            "type": "WEBLINK"
        }
    }
]

const Header = () => (
    <nav className='navbar' id='top'>
        <a href="/">
            <img className='logo' src={Logo} ></img>
        </a>
        <div className='navItems'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Menu</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'><i className="fa-duotone fa-cart-shopping"></i></a></li>
        </div>
    </nav>
);

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
    return (<div className='restaurantCard'>
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.info.cloudinaryImageId} />
        <h3>{name}</h3>
        <p>{cuisines.join(" · ")}</p>
        <p className='foodStat'>
            <span>★ {avgRating}</span>
            · <span>{sla.lastMileTravelString}</span>
            · <span>{sla.slaString}</span>
        </p>
        <p className='price'>{costForTwo}</p>
    </div>)
};

const Body = () => (
    <div className='body'>
        <div className='searchContainer'>
            <div>
                <label htmlFor='search'><i className="fa-solid fa-magnifying-glass"></i></label>
                <input type='text' id='search' autoComplete='off' placeholder='Search for restaurants and food' />
            </div>
        </div>
        <div className='restaurantContainer'>
            {
                restoList.map((restaurantItem) => (
                    <a target='_blank' href={restaurantItem.cta.link} key={restaurantItem.info.id}>
                        <RestaurantCard resData={restaurantItem} />
                    </a>
                ))
            }
        </div>
    </div>
);

const Footer = () => (
    <div className='footer'>
        <p>Developed with <i class="fa-solid fa-heart fa-beat-fade"></i> by <a target='_blank' href='https://www.linkedin.com/in/dprathamesh/'>Prathamesh Dhavale</a> © 2023 <a href='#top'>SwigZo</a></p>
    </div>
);

const AppLayout = () => (
    <div className='app'>
        <Header />
        <Body />
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);