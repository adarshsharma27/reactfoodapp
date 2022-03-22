import React from "react";
const Cards = ({ image, label, calories, totalWeight, cuisineType }) => {
    return (
        <>
            <div
                className="col-xl-4 col-md-4 col-sm-12"
            >
                <div className="product-card text-left">
                    <img className="img-responsive" src={image} alt={label} />
                    <div className="product-image-caption">
                        <div className="product-image-txt">
                            <h3>{label}</h3>
                            <p className="decription-1">Calories:{calories}</p>
                            <p className="decription-2">TotalWeight:{totalWeight}</p>
                            <p className="decription-3">CuisineType:{cuisineType}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
