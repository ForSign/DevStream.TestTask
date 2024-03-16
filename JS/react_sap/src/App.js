import React, {useEffect, useState} from 'react';
import './styles/App.css';
import Tos from "./components/Tos";
import TosModal from "./components/UI/TosModal/TosModal";
import Galley from "./components/Galley";
import rootConfig from "./config.json";

function App() {

    const [modal, setModal] = useState(true);
    // const [data, setData] = useState({});

    const apiUrl = rootConfig.host + rootConfig.jsonPath;

    const acceptTos = () => {
        setModal(false);

    }

    // let displayData;

    const [data, setData] = useState(null)

    useEffect(() => {
        const load = async (id_) => {
            let url = apiUrl
            let data = await (await fetch(url)).json()
            const manipulatedData = data
            // do manipulation
            setData(manipulatedData)
        }
        load()
    }, [])

    return (
        <div className="App">
            {data}
            {/*<TosModal visible={modal}>*/}
            {/*    <Tos acceptTos={acceptTos} jsonData={data}/>*/}
            {/*</TosModal>*/}
            {/*{modal === true*/}
            {/*    ? <Galley host={rootConfig.host} jsonData={data}/>*/}
            {/*    : <></>*/}
            {/*}*/}
        </div>
    );

}

export default App;
