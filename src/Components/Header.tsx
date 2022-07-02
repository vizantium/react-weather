import search from '../assets/search.png'
import location from './../assets/location.png'
import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {getWeather, setCity} from "../redux/search-slice";
import {StateType, useAppDispatch} from "../redux/redux-store";
import {useSelector} from "react-redux";

export const Header:React.FC = () => {
    const dispatch = useAppDispatch()
    const isMount = useRef(false)
    const city = useSelector((state:StateType) => state.searchSlice.city)
    const [typeTemp, setTypeTemp] = useState('')


    useEffect(  () => {
            dispatch(getWeather({city: 'London'}))
            dispatch(setCity('London'))

    }, [])

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCity(event.target.value))
    }

    const getWeatherByName = (cityName: string) => {
        const city = cityName
        dispatch(getWeather({city, typeTemp}))
        dispatch(setCity(city))
    }

    const changeToC = () =>{

        dispatch(getWeather({city, typeTemp : 'metric'}))
        setTypeTemp('metric')

    }

    const changeToF = () =>{

        dispatch(getWeather({city, typeTemp : 'imperial'}))
        setTypeTemp('imperial')

    }

    const getWeatherByCity =  () => {
         dispatch(getWeather({city, typeTemp}))
    }
    return (
        <div>
            <div className={'buttons'}>
                <div onClick={() => getWeatherByName('Moscow')}>Moscow</div>
                <div onClick={() => getWeatherByName('London')}>London</div>
                <div onClick={() => getWeatherByName('Tokyo')}>Tokyo</div>
                <div onClick={() => getWeatherByName('Athens')}>Athens</div>
                <div onClick={() => getWeatherByName('Beijing')}>Beijing</div>
            </div>
            <div className={'search'}>
                <input onChange={onChangeInput} placeholder={'search for city...'}/>
                <div className={'icons'}  >
                    <img onClick={getWeatherByCity} className={'searchIcon'} src={search}/>
                    <img src={location}/>
                </div>
                <div className={'grade'}>
                    <span className={'transition'} onClick={changeToC}>&#8451;</span>
                    <span>|</span>
                    <span className={'transition'} onClick={changeToF}>&#8457;</span>
                </div>
            </div>
        </div>
    )
}