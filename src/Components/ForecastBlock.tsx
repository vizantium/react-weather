import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {StateType} from "../redux/redux-store";

export const ForecastBlock:React.FC<any> = ({info}) => {
    const {timezone} = useSelector((state: StateType) => state.searchSlice.info)
    let day: string = ''
    if (info !== undefined) {
        const date = new Date(info.dt * 1000 + (timezone * 1000) - 10800 * 1000)
        const newDate = date.toString().split(' ')
        day = newDate[0]
    }

    return (
        <div>
            {info == null ? <div>loading</div> :
                <div className={'block'}>
                    <p className={'textInfo'}>{day}</p>
                    <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}/>
                    <p>{Math.round(info.temp.day)}°</p>
                </div>
            }
        </div>
    )
}