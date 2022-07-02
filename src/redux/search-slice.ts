import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type getWeatherType = {
    city: string,
    typeTemp?: string
}

export const getWeather = createAsyncThunk('search/getWeather', async ({city, typeTemp}: getWeatherType) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${ typeTemp || 'metric'}&appid=a959cf55e2a7967b1585e8562824570c`)
    const {dt, timezone, name} = data
    const {lat, lon} = data.coord
    const {
        feels_like,
        humidity,
        temp,
        temp_max,
        temp_min
    } = data.main
    const {speed} = data.wind
    const {icon, main} = data.weather[0]
    let {sunrise, sunset, country} = data.sys

    const sunriseTime = new Date(sunrise * 1000 + (timezone * 1000) - 10800 * 1000)
    sunrise = sunriseTime.toString().split(' ')

    const sunsetTime = new Date(sunset * 1000 + (timezone * 1000) - 10800 * 1000)
    sunset = sunsetTime.toString().split(' ')

    const date = new Date(dt * 1000 + (timezone * 1000) - 10800 * 1000)
    const newDate = date.toString().split(' ')



    const HourData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${ typeTemp || 'metric'}&exclude=minutely&appid=a959cf55e2a7967b1585e8562824570c`)


    const {daily, hourly} = HourData.data

    const returnData = {
        lat,
        lon,
        newDate,
        feels_like,
        humidity,
        temp,
        temp_max,
        temp_min,
        speed,
        icon,
        main,
        sunrise,
        sunset,
        name,
        country,
        daily,
        hourly,
        timezone
    }




    return returnData
})


type stateType = {
    city: string,
    info: {
        lat: number,
        lon: number,
        feels_like: number,
        newDate: string[],
        humidity: number,
        temp: number,
        temp_max: number,
        temp_min: number,
        speed: number,
        icon: string,
        name: string,
        country: string,
        main: string,
        sunrise: Array<string>,
        sunset: Array<string>,
        daily: Array<object>,
        hourly: Array<object>,
        timezone: number
    }
}

const initialState: stateType = {
    city: null as unknown as string,
    info: {
        lat: null as unknown as number,
        lon: null as unknown as number,
        newDate: null as unknown as string[],
        feels_like: null as unknown as number,
        humidity: null as unknown as number,
        temp: null as unknown as number,
        temp_max: null as unknown as number,
        temp_min: null as unknown as number,
        speed: null as unknown as number,
        icon: null as unknown as string,
        main: null as unknown as string,
        name: null as unknown as string,
        country: null as unknown as string,
        sunrise: [],
        sunset: [],
        daily: [],
        hourly: [],
        timezone: null as unknown as number,
    }
}


const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        setCity(state, action) {
            state.city = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getWeather.fulfilled, (state, action) => {
            state.info = action.payload
        })
    }
})

export const {setCity} = searchSlice.actions

export default searchSlice.reducer