import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setcity]=useState("");
    let [err,setErr]=useState(false)

    let API_URL="https://api.openweathermap.org/data/2.5/weather"
    let API_KEY="45cfbc87129b0c91523dbf552a9bc35c"

    let getWatherInfo= async()=>{
        try{
        let watherData=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let watherJsonData=await watherData.json();
        // console.log(watherJsonData); 
        let result={
            City:watherJsonData.name,
            Temp: watherJsonData.main.temp,
            Temp_max: watherJsonData.main.temp_max,
            Temp_min: watherJsonData.main.temp_min,
            Humidity: watherJsonData.main.humidity,
            feels_like: watherJsonData.main.feels_like,
            weather: watherJsonData.weather[0].description,
        }
        console.log(result);
        return result;
    }
    catch(err){
        throw(err);
    }
    };


    let changHandal=(e)=>{
        setcity(e.target.value);
    }
    let submitHandal=async(e)=>{
        try{
        e.preventDefault();
        // console.log(city);
        setcity("");
        let result=await getWatherInfo();
        updateInfo(result);
        }catch{
            setErr(true)
        }
    }

    return(
        <div>
        <div className='Search-Ctn' >
            <h2>Search Box</h2>
            <form onSubmit={submitHandal}>
            <TextField  id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={changHandal} required/>
            <br /><br />
            <Button variant="outlined" type='submit' onClick={getWatherInfo}>Search</Button>
            {err && <p>This city info not avilabal</p>}
            </form>
        </div>
        </div>
    )
}