import React from "react";
import temperature from '../assets/temperature.png'
import humidityImg from '../assets/humidity.png'
import wind from '../assets/wind.png'
import sun from '../assets/sun.png'
import {useSelector} from "react-redux";
import {StateType, useAppDispatch} from "../redux/redux-store";

export const MainInfo: React.FC = () => {

    const {
        temp,
        feels_like,
        humidity,
        speed,
        temp_max,
        temp_min,
        icon,
        name,
        country,
        newDate
    } = useSelector((state: StateType) => state.searchSlice.info)
    let timeNow = ['00', '00']

    if (newDate !==null) {
        const time = newDate[4].split(':')
        timeNow = time
    }

    return (
        <div>
            { newDate == null ? <div>Loading</div> :
                <div className={'mainInfo'}>
                    <div className={'dayTime'}>{newDate[0]}, {newDate[2] + ' ' + newDate[1] + ' ' + newDate[3]} | Local
                        time: { timeNow[0]}:{timeNow[1]}
                    </div>
                    <div className={'city'}>{name}, {country}</div>
                    <div className={'weather'}>Clear</div>
                    <div className={'weatherInfo'}>
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                        <span className={'grade'}>{Math.round(temp)}°</span>
                        <div>
                            <div><img src={temperature}/>Real fell: <span
                                className={'value'}>{Math.round(feels_like)}°</span>
                            </div>
                            <div><img src={humidityImg}/>Humidity: <span className={'value'}>{humidity}%</span></div>
                            <div><img src={wind}/>Wind: <span className={'value'}>{Math.round(speed)} km/h</span></div>
                        </div>
                    </div>
                    <div className={'sunTemp'}>
                        <img src={sun}/><p>Rise: <span>04:45 AM</span></p><p>|</p>
                        <img src={sun}/><p>Set: <span>09:33 PM</span></p><p>|</p>
                        <img src={sun}/><p>High: <span>{Math.round(temp_max)}°</span></p><p>|</p>
                        <img src={sun}/><p>Low: <span>{Math.round(temp_min)}°</span></p>
                    </div>
                </div>
            }
        </div>
    )
}