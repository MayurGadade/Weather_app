import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({info}){
    const imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Xad6dmW903a_mOFJtdpVrn3YOWlTam7_UQ&s'; 
    const Cold_URL="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const Hot_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Rain_URL="https://images.unsplash.com/photo-1665571528315-792d1690538d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbmluZyUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(

    <div className='InfoBox' style={{width:'300px', margin: '0 auto'}}>

        <Card sx={{ Width: '100%', maxWidth: 'none', minWidth:"300px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="300px"
          image={info.Humidity>80 ? Rain_URL : info.Temp>20 ? Hot_URL : info.Temp<20 ? Cold_URL: imgUrl}
          alt="green iguana"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          <Typography variant="body2" color="text.secondary" component={'span'}>
            <div>
              <IconButton>
            <h3>{info.City} &nbsp;</h3>
              {info.Humidity>80 ? <ThunderstormIcon /> : info.Temp>20 ? <WbSunnyIcon /> : info.Temp<20 ? <AcUnitIcon />: <CloudIcon />}
              </IconButton>
            <p>Humidity :{info.Humidity}</p>
            <p>Tempretucher :{info.Temp}&deg;c</p>
            <p>Max Tempretucher :{info.Temp_max}&deg;c</p>
            <p>Min Tempretucher :{info.Temp_min}&deg;c</p>
            <p>Feels Like :{info.feels_like}&deg;c</p>
            <p>Weather:{info.weather}</p>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>)
}