import {Header} from "./Components/Header";
import './scss/app.scss'
import {MainInfo} from "./Components/MainInfo";
import {Forecast} from "./Components/Forecast";

function App() {
    return (
        <div className={'main mainHot'}>
            <Header/>
            <MainInfo/>
            <Forecast/>
        </div>
    );
}

export default App;
