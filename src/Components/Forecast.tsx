import React from "react";
import {ForecastBlock} from "./ForecastBlock";

export const Forecast:React.FC = () => {
    return (
        <div className={'Forecast'}>
            <div>
                <p>HOURLY FORECAST</p>
                <hr/>
                <div className={'blocks'}>
                {[...new Array(5)].map((_, index) => <ForecastBlock/>)}
                </div>
            </div>
            <div>
                <p>DAILY FORECAST</p>
                <hr/>
                <div className={'blocks'}>
                {[...new Array(5)].map((_, index) => <ForecastBlock/>)}
                </div>
            </div>
        </div>
    )
}