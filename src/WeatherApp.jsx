import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWartgerInfo]=useState({
            city:"Saydri",
            Humidity:0,
            Temp:0,
            Temp_max:0,
            Temp_min:0,
            feels_like:0,
            weather: "",
    });

    let updateInfo=(result)=>{
        setWartgerInfo(result);
    }

    return(
        <div>
    <SearchBox updateInfo={updateInfo} />
    <br />
    <InfoBox info={weatherInfo}/>
    </div>
    )
}