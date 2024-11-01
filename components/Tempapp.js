import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=826feedd9fa1939883065483a01110e0`
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);   
        
        };

        fetchApi();

    } ,[search] )


    return (
        <>
            <div className="box" >
                
                <div className="inputData">
                    <input
                        type="search"
                        className="inputFeild"
                        placeholder= "        Enter City"
                        
                        
                        onChange= {(event) =>  { setSearch(event.target.value)}  }
                    />



                </div>

        {!city ? (
            <p className="errorMsg"> No Data Found</p> 
        )  : (
            <div>
            <div className="info">
                    <h2 className="location">
                         {search}

                    </h2>
                    <h1 className="temp">
                    {city.temp}°Cel
                    </h1>
                    <h3 className="tempmin_max">Min : {city.temp}°Cel |   Max : {city.temp}°Cel</h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>    

             ) } 
                
            </div>
        </>
    )
}

export default Tempapp;