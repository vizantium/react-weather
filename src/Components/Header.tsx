import search from './../assets/search.png'
import location from './../assets/location.png'
import React from "react";

export const Header:React.FC = () => {
    return (
        <div>
            <div className={'buttons'}>
                <div>Moscow</div>
                <div>London</div>
                <div>Tokyo</div>
                <div>Athens</div>
                <div>Beijing</div>
            </div>
            <div className={'search'}>
                <input placeholder={'search for city...'}/>
                <div className={'icons'}>
                    <img className={'searchIcon'} src={search}/>
                    <img src={location}/>
                </div>
                <div className={'grade'}>
                    <span className={'transition'}>&#8451;</span>
                    <span>|</span>
                    <span className={'transition'}>&#8457;</span>
                </div>
            </div>
        </div>
    )
}