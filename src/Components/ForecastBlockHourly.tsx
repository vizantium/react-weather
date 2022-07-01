import React from "react";
import {useSelector} from "react-redux";
import {StateType} from "../redux/redux-store";

export const ForecastBlockHourly:React.FC<any> = ({info}) => {
    const {timezone} = useSelector((state: StateType) => state.searchSlice.info)
    let timeNow: string = ''

    if (info !== undefined) {
        const date = new Date(info.dt * 1000 + (timezone * 1000) - 10800 * 1000)
        const newDate = date.toString().split(' ')
        const time = newDate[4].slice(0, -3)
        timeNow = time
    }

    return (
        <div>
            {info == null ? <div>loading</div> :
                <div className={'block'}>
                    <p className={'textInfo'}>{timeNow}</p>
                    <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}/>
                    <p>{Math.round(info.temp)}°</p>
                </div>
            }
        </div>
    )
}