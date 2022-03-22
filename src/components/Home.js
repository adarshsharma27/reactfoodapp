import React from "react";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import Cards from "./Cards";
import Search from "./Search";
const Home = () => {
    const [country, setCountry] = useState(null);
    

      const setFoods = async (query) => {
          setCountry(null)
        const ApiUrl1 = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=20`;
        const response = await fetch(ApiUrl1);
        const data = await response.json();
        setCountry(data.hits);
        
    };
    useEffect(() => {
        setFoods("cakes");
    }, []);
    return (
        <>
        <Search setFoods={setFoods}/>
            <div className="content bg-light">
                <div className="container py-4">
                    <div className="row">
                        {(country===null) ? (
                            <Loader />
                        ) :(
                            country.map((element, index) => {
                                let {recipe:{image,label,calories,totalWeight,cuisineType}} = element;
                                return <Cards key={index} image={image} label={label} calories={calories} totalWeight={totalWeight} cuisineType={cuisineType} />;
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
