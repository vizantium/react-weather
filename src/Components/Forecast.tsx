import React from "react";
import {ForecastBlock} from "./ForecastBlock";
import {useSelector} from "react-redux";
import {StateType} from "../redux/redux-store";
import {ForecastBlockHourly} from "./ForecastBlockHourly";

export const Forecast:React.FC = () => {
    const { daily, hourly } = useSelector((state: StateType) => state.searchSlice.info)
    if (daily !== null ) {
    }
    return (<div> { daily == null ? <div>l</div> :
            <div className={'Forecast'}>
                <div>
                    <p>HOURLY FORECAST</p>
                    <hr/>
                    <div className={'blocks'}>
                        {[...new Array(5)].map((_, index) => <ForecastBlockHourly key={index} info={hourly[index]}/>)}
                    </div>
                </div>
                <div>
                    <p>DAILY FORECAST</p>
                    <hr/>
                    <div className={'blocks'}>
                        {[...new Array(5)].map((_, index) => <ForecastBlock key={index} info={daily[index]}/>)}
                    </div>
                </div>
            </div>
        }
        </div>
    )
}