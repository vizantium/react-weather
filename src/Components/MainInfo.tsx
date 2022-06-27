import React from "react";
import temperature from '../assets/temperature.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'
import sun from '../assets/sun.png'

export const MainInfo:React.FC = () => {
    return (
        <div className={'mainInfo'}>
            <div className={'dayTime'}>Monday, 27 Jun 2022 | Local time: 06:22 PM </div>
            <div className={'city'}>Tokyo, JP</div>
            <div className={'weather'}>Clear</div>
            <div className={'weatherInfo'}>
                <img src={'http://openweathermap.org/img/wn/01d@2x.png'}/>
                <span className={'grade'}>35°</span>
                <div>
                    <div><img src={temperature}/>Real fell: <span className={'value'}>34°</span></div>
                    <div><img src={humidity}/>Humidity: <span className={'value'}>29%</span></div>
                    <div><img src={wind}/>Wind: <span className={'value'}>5 km/h</span></div>
                </div>
            </div>
            <div className={'sunTemp'}>
                <img src={sun}/><p>Rise: <span>04:45 AM</span></p><p>|</p>
                <img src={sun}/><p>Set: <span>09:33 PM</span></p><p>|</p>
                <img src={sun}/><p>High: <span>37°</span></p><p>|</p>
                <img src={sun}/><p>Low: <span>33°</span></p>
            </div>
        </div>
    )
}